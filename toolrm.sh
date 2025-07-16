#!/bin/bash
# Ask for the application name
read -p "Enter part or full name of the application to delete (e.g., chrome for Google Chrome): " appName
# Find applications in the Applications folder (case-insensitive)
while IFS= read -r appPath; do
    appPaths+=("$appPath")
done < <(find /Applications -iname "*$appName*.app")
declare -a filteredApps
# Exclude subdirectory matches
for appPath in "${appPaths[@]}"; do
    isSubDir=0
    for filteredApp in "${filteredApps[@]}"; do
        if [[ $appPath == $filteredApp/* ]]; then
            isSubDir=1
            break
        fi
    done
    if [ $isSubDir -eq 0 ]; then
        filteredApps+=("$appPath")
    fi
done
# Check if any applications were found
if [ ${#filteredApps[@]} -eq 0 ]; then
    echo "No applications found matching \"$appName\"."
    exit 1
fi
echo "Applications to be considered for deletion:"
printf '%s\n' "${filteredApps[@]}"
# Ask for confirmation for each application
for appPath in "${filteredApps[@]}"; do
    read -p "Do you want to delete $(basename "$appPath")? (y/n): " confirm
    if [[ $confirm == [Yy]* ]]; then
        sudo rm -rf "$appPath"
        echo "$(basename "$appPath") has been deleted."
    else
        echo "Skipped $(basename "$appPath")."
    fi
done
