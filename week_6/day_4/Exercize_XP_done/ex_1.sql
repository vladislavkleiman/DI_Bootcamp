-- ex 1

--1

select * from items
order by price asc

--2

select * from items
where price >= 80 order by price desc

--3

select first_name, last_name from customers
order by first_name desc limit 3

--4

select last_name from customers
order by last_name desc

