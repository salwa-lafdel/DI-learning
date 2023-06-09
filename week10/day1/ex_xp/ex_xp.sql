create table items(items_name varchar(50),price int);
insert into items(items_name,price) values('Small Desk' ,100),('Large desk',300),('Fan',80);
select * from items
create table customers (first_name varchar(50),last_name varchar(50));
insert into customers(first_name,last_name) values(' Greg','Jones'),(' Sandra ','Jones'),(' Scott ','Scott '),(' Trevor ','Trevor '),('Melanie ','Johnson')
select*from customers
-- 1
select items_name from items
-- 2
SELECT *FROM items WHERE price > 80;
-- 3
SELECT *FROM items WHERE price <= 300;
-- 4
SELECT *FROM customers WHERE last_name = 'Smith';
-- 5
SELECT *FROM customers WHERE last_name = 'Jones';
-- 6
SELECT *FROM customers WHERE first_name <> 'Scott';


