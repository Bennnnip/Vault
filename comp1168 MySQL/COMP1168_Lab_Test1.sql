-- Q1
Select concat(vendor_contact_first_name,',',vendor_contact_last_name) as VenderContactName, vendor_phone from ap.vendors
where vendor_phone like '(800)%'
order by VenderContactName Asc;

-- Q2
Select invoice_number, invoice_date, payment_total from ap.invoices
where payment_total = 0
order by invoice_number Desc;

-- Q3
select order_id, 
date_format(order_date,'%W, %M %d %Y') AS DateOrdered from om.orders
order by order_id Desc;