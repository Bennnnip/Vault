import sys
import os
import shutil
import paramiko
import posixpath
import stat
from datetime import datetime

from PySide6.QtWidgets import (
    QApplication, QMainWindow, QMenu, QSplitter, QTreeView, QFileSystemModel,
    QMessageBox, QDialog, QLineEdit, QPushButton, QFormLayout, QInputDialog, QHBoxLayout, QHeaderView, QAbstractItemView
)
from PySide6.QtCore import QDir, Qt, Signal, QMimeData
from PySide6.QtGui import QAction, QIcon, QStandardItemModel, QStandardItem, QDrag

# SFTPConnectDialog class is correct and unchanged
class SftpConnectDialog(QDialog):
    """A dialog to get SFTP connection details from the user."""
    connection_successful = Signal(object)

    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle("Connect to SFTP Server")
        self.layout = QFormLayout(self)
        self.host_input = QLineEdit(); self.port_input = QLineEdit("22")
        self.user_input = QLineEdit(); self.pass_input = QLineEdit()
        self.pass_input.setEchoMode(QLineEdit.Password)
        self.layout.addRow("Host:", self.host_input); self.layout.addRow("Port:", self.port_input)
        self.layout.addRow("Username:", self.user_input); self.layout.addRow("Password:", self.pass_input)
        buttons = QHBoxLayout(); self.connect_button = QPushButton("Connect"); self.cancel_button = QPushButton("Cancel")
        buttons.addWidget(self.connect_button); buttons.addWidget(self.cancel_button)
        self.layout.addRow(buttons)
        self.connect_button.clicked.connect(self.attempt_connection); self.cancel_button.clicked.connect(self.reject)

    def attempt_connection(self):
        try:
            transport = paramiko.Transport((self.host_input.text(), int(self.port_input.text())))
            transport.connect(username=self.user_input.text(), password=self.pass_input.text())
            sftp = paramiko.SFTPClient.from_transport(transport)
            self.connection_successful.emit(sftp)
            self.accept()
        except Exception as e:
            QMessageBox.critical(self, "Connection Error", f"Failed to connect: {e}")

class CustomTreeView(QTreeView):
    """Custom Tree View to handle drag and drop"""
    def __init__(self, parent=None):
        super().__init__(parent)
        # CORRECTED LINE: Access the Enum correctly
        self.setDragDropMode(QAbstractItemView.DragDropMode.DragDrop)
        self.setSelectionMode(QAbstractItemView.SelectionMode.ExtendedSelection)

    def startDrag(self, supportedActions):
        indexes = self.selectedIndexes()
        if not indexes:
            return

        name_indexes = [idx for idx in indexes if idx.column() == 0]
        if not name_indexes:
            return

        mime_data = self.model().mimeData(name_indexes)
        if not mime_data:
            return
            
        mime_data.setProperty("source_view_name", self.objectName())
        drag = QDrag(self)
        drag.setMimeData(mime_data)
        drag.exec(Qt.DropAction.MoveAction | Qt.DropAction.CopyAction)

class DualPaneFileManager(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("PyForklift")
        self.setGeometry(100, 100, 1400, 800)
        
        self.left_sftp_client = None; self.right_sftp_client = None
        self.left_remote_path = ''; self.right_remote_path = ''

        self.splitter = QSplitter(Qt.Horizontal)
        
        self.left_tree = CustomTreeView()
        self.left_tree.setObjectName("left_tree")
        self.right_tree = CustomTreeView()
        self.right_tree.setObjectName("right_tree")

        self.go_local(self.left_tree, QDir.homePath())
        self.go_local(self.right_tree, QDir.homePath())

        self.splitter.addWidget(self.left_tree)
        self.splitter.addWidget(self.right_tree)
        self.setCentralWidget(self.splitter)
        self.create_toolbar()

    def setup_tree_view(self, view_object):
        view_object.setSortingEnabled(True)
        view_object.setAnimated(True)
        view_object.setContextMenuPolicy(Qt.ContextMenuPolicy.CustomContextMenu)
        view_object.customContextMenuRequested.connect(self.show_context_menu)
        view_object.doubleClicked.connect(self.on_double_click)
        view_object.dropEvent = self.on_drop
        view_object.dragEnterEvent = lambda e: e.acceptProposedAction()
        view_object.dragMoveEvent = lambda e: e.acceptProposedAction()
        return view_object
    
    def on_drop(self, event):
        source_view_name = event.mimeData().property("source_view_name")
        if not source_view_name: return

        source_view = self.findChild(CustomTreeView, source_view_name)
        dest_view = self.sender()
        if source_view is dest_view: return

        op = 'move' if event.proposedAction() == Qt.DropAction.MoveAction else 'copy'
        
        for index in source_view.selectionModel().selectedRows():
            if op == 'copy': self._execute_copy(source_view, dest_view, index)
            else: self._execute_move(source_view, dest_view, index)
        event.accept()

    def on_double_click(self, index):
        tree_view = self.sender()
        if self._is_local_pane(tree_view):
            path = tree_view.model().filePath(index)
            if os.path.isdir(path):
                tree_view.setRootIndex(index)
        else:
            item_text = index.data(Qt.ItemDataRole.DisplayRole)
            if item_text == "..":
                self.go_up_directory(); return
            
            sftp, current_path = self.get_remote_info(tree_view)
            new_path = posixpath.join(current_path, item_text)
            try:
                if stat.S_ISDIR(sftp.stat(new_path).st_mode):
                    self.navigate_remote_directory(tree_view, new_path)
            except Exception as e:
                print(f"Error navigating remote: {e}")
    
    def create_toolbar(self):
        toolbar = self.addToolBar("Main Toolbar")
        up_action = QAction(QIcon.fromTheme("go-up"), "Up", self); up_action.triggered.connect(self.go_up_directory); toolbar.addAction(up_action)
        sftp_action = QAction(QIcon.fromTheme("network-server"), "Connect...", self); sftp_action.triggered.connect(self.show_sftp_dialog); toolbar.addAction(sftp_action)
        toolbar.addSeparator()
        copy_action=QAction(QIcon.fromTheme("edit-copy"), "Copy", self); copy_action.triggered.connect(lambda:self.process_operation('copy')); toolbar.addAction(copy_action)
        move_action=QAction(QIcon.fromTheme("edit-cut"), "Move", self); move_action.triggered.connect(lambda:self.process_operation('move')); toolbar.addAction(move_action)
        delete_action=QAction(QIcon.fromTheme("edit-delete"), "Delete", self); delete_action.triggered.connect(lambda:self.process_operation('delete')); toolbar.addAction(delete_action)

    def show_context_menu(self, position):
        tree_view = self.sender()
        index = tree_view.indexAt(position)
        menu = QMenu()
        if index.isValid():
            copy_action = menu.addAction("Copy"); move_action = menu.addAction("Move"); delete_action = menu.addAction("Delete")
            action = menu.exec(tree_view.viewport().mapToGlobal(position))
            if action == copy_action: self.process_operation('copy')
            elif action == move_action: self.process_operation('move')
            elif action == delete_action: self.process_operation('delete')

    def process_operation(self, op_type):
        active_tree, dest_tree = self.get_active_and_destination_panes()
        if not active_tree.selectionModel().hasSelection(): return

        for index in active_tree.selectionModel().selectedRows(0):
            if op_type == 'copy': self._execute_copy(active_tree, dest_tree, index)
            elif op_type == 'move': self._execute_move(active_tree, dest_tree, index)
            elif op_type == 'delete': self._execute_delete(active_tree, index)
    
    def _execute_copy(self, source_view, dest_view, source_index):
        s_local = self._is_local_pane(source_view); d_local = self._is_local_pane(dest_view)
        try:
            if s_local and d_local: self._local_to_local(source_view, dest_view, source_index, 'copy')
            elif not s_local and d_local: self._remote_to_local(source_view, dest_view, source_index)
            elif s_local and not d_local: self._local_to_remote(source_view, dest_view, source_index)
            else: QMessageBox.warning(self, "Unsupported", "Remote-to-remote copy is not supported.")
        except Exception as e: QMessageBox.critical(self, "Copy Error", str(e))
    
    def _execute_move(self, source_view, dest_view, source_index):
        s_local = self._is_local_pane(source_view); d_local = self._is_local_pane(dest_view)
        try:
            if s_local and d_local: self._local_to_local(source_view, dest_view, source_index, 'move')
            elif not s_local and d_local: self._remote_to_local(source_view, dest_view, source_index, delete_source=True)
            elif s_local and not d_local: self._local_to_remote(source_view, dest_view, source_index, delete_source=True)
            else: QMessageBox.warning(self, "Unsupported", "Remote-to-remote move is not supported.")
        except Exception as e: QMessageBox.critical(self, "Move Error", str(e))

    def _execute_delete(self, source_view, source_index):
        try:
            if self._is_local_pane(source_view):
                path = source_view.model().filePath(source_index)
                if os.path.isdir(path): shutil.rmtree(path)
                else: os.remove(path)
            else:
                sftp, current_path = self.get_remote_info(source_view); item_name = source_index.data()
                remote_path = posixpath.join(current_path, item_name)
                if stat.S_ISDIR(sftp.stat(remote_path).st_mode): self._delete_remote_dir(sftp, remote_path)
                else: sftp.remove(remote_path)
        except Exception as e:
            QMessageBox.critical(self, "Delete Error", str(e))

    def _local_to_local(self, s_view, d_view, s_idx, op):
        s_path = s_view.model().filePath(s_idx); d_path = d_view.model().filePath(d_view.rootIndex())
        dest_full_path = os.path.join(d_path, os.path.basename(s_path))
        if os.path.exists(dest_full_path): return

        if op == 'copy':
            if os.path.isdir(s_path): shutil.copytree(s_path, dest_full_path)
            else: shutil.copy2(s_path, d_path)
        elif op == 'move': shutil.move(s_path, d_path)

    def _remote_to_local(self, s_view, d_view, s_idx, delete_source=False):
        sftp, remote_path = self.get_remote_info(s_view)
        remote_item_path = posixpath.join(remote_path, s_idx.data())
        local_dest_dir = d_view.model().filePath(d_view.rootIndex())
        self._download_item(sftp, remote_item_path, local_dest_dir)
        if delete_source: self._execute_delete(s_view, s_idx)
    
    def _local_to_remote(self, s_view, d_view, s_idx, delete_source=False):
        sftp, remote_dest_dir = self.get_remote_info(d_view)
        local_item_path = s_view.model().filePath(s_idx)
        self._upload_item(sftp, local_item_path, remote_dest_dir)
        if delete_source: self._execute_delete(s_view, s_idx)
   
    def _download_item(self, sftp, remote_path, local_dest_dir):
        item_name=posixpath.basename(remote_path); local_path=os.path.join(local_dest_dir, item_name)
        if stat.S_ISDIR(sftp.stat(remote_path).st_mode):
            os.makedirs(local_path, exist_ok=True)
            for item in sftp.listdir(remote_path): self._download_item(sftp, posixpath.join(remote_path, item), local_path)
        else: sftp.get(remote_path, local_path)

    def _upload_item(self, sftp, local_path, remote_dest_dir):
        item_name=os.path.basename(local_path); remote_path=posixpath.join(remote_dest_dir, item_name)
        if os.path.isdir(local_path):
            try: sftp.mkdir(remote_path)
            except IOError: pass
            for item in os.listdir(local_path): self._upload_item(sftp, os.path.join(local_path, item), remote_path)
        else: sftp.put(local_path, remote_path)

    def _delete_remote_dir(self, sftp, path):
        for item in sftp.listdir_attr(path):
            item_path = posixpath.join(path, item.filename)
            if stat.S_ISDIR(item.st_mode): self._delete_remote_dir(sftp, item_path)
            else: sftp.remove(item_path)
        sftp.rmdir(path)
    
    def go_local(self, tree_view, path):
        self.setup_tree_view(tree_view)
        model = QFileSystemModel()
        model.setRootPath("/")
        tree_view.setModel(model)
        tree_view.setRootIndex(model.index(path))
        for i in range(1, 4): tree_view.header().setSectionResizeMode(i, QHeaderView.ResizeMode.ResizeToContents)
        tree_view.header().setStretchLastSection(False)
        sftp, _ = self.get_remote_info(tree_view)
        if sftp: sftp.close();
        if tree_view is self.left_tree: self.left_sftp_client = None
        else: self.right_sftp_client = None

    def navigate_remote_directory(self, tree_view, path):
        sftp, _ = self.get_remote_info(tree_view);
        if not sftp: return
        self.setup_tree_view(tree_view)
        remote_model=QStandardItemModel(); remote_model.setHorizontalHeaderLabels(['Name', 'Size', 'Type', 'Date Modified'])
        if path != '/': up_item = QStandardItem(".."); up_item.setIcon(QIcon.fromTheme("go-up")); remote_model.appendRow(up_item)
        try:
            for attr in sftp.listdir_attr(path):
                name=QStandardItem(attr.filename); is_dir=stat.S_ISDIR(attr.st_mode); name.setIcon(QIcon.fromTheme("folder" if is_dir else "text-x-generic"))
                size=QStandardItem(str(attr.st_size)); type=QStandardItem("Folder" if is_dir else "File"); date=QStandardItem(datetime.fromtimestamp(attr.st_mtime).strftime('%Y-%m-%d %H:%M'))
                remote_model.appendRow([name,size,type,date])
        except Exception as e: print(e)
        tree_view.setModel(remote_model)
        for i in range(1,4): tree_view.header().setSectionResizeMode(i, QHeaderView.ResizeMode.ResizeToContents)
        tree_view.header().setStretchLastSection(False)
        if tree_view is self.left_tree: self.left_remote_path = path
        else: self.right_remote_path = path

    def show_sftp_dialog(self): active_tree, _ = self.get_active_and_destination_panes(); dialog=SftpConnectDialog(self); dialog.connection_successful.connect(lambda sftp:self.connect_pane_to_sftp(active_tree,sftp)); dialog.exec()
    def connect_pane_to_sftp(self,tree_view,sftp):
        if tree_view is self.left_tree: self.left_sftp_client=sftp
        else: self.right_sftp_client=sftp
        self.navigate_remote_directory(tree_view,sftp.getcwd() or '/')
    def get_remote_info(self, tree_view): return (self.left_sftp_client, self.left_remote_path) if tree_view is self.left_tree else (self.right_sftp_client, self.right_remote_path)
    def get_active_and_destination_panes(self): return (self.left_tree, self.right_tree) if self.left_tree.hasFocus() else (self.right_tree, self.left_tree)
    def _is_local_pane(self,tree_view): return isinstance(tree_view.model(), QFileSystemModel)
    def go_up_directory(self):
        active_tree, _ = self.get_active_and_destination_panes()
        if self._is_local_pane(active_tree):
            active_tree.setRootIndex(active_tree.rootIndex().parent())
        else:
            if active_tree.model().rowCount() > 0: self.on_double_click(active_tree.model().index(0,0))
    def closeEvent(self,e):
        if self.left_sftp_client: self.left_sftp_client.close()
        if self.right_sftp_client: self.right_sftp_client.close()
        e.accept()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = DualPaneFileManager()
    window.show()
    sys.exit(app.exec())