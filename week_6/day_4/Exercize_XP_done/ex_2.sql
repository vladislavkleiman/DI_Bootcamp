--1

select * from customer

--2

select concat_ws(' ',first_name, last_name) as full_name from customer

--3

select distinct create_date from customer

--4

select * from customer
order by first_name asc

--5

select  film_id, title, description, release_year, rental_rate from film
order by rental_rate asc

--6

select address, phone, district from address
where district = 'Texas'

--7

select * from film
where film_id = 15 or film_id = 150

--8

select * from film
where title in ('Bed Highball')

--9

select film_id, title, description, length, rental_rate from film
where title like 'Be%'

--10

select * from film
order by rental_rate asc limit 10

--11

select * from film
order by rental_rate asc limit 10 offset 10

--12

select customer.customer_id, first_name, last_name, amount, payment_date from customer
inner join payment
on customer.customer_id = payment.customer_id
order by customer.customer_id asc

--13

select film.film_id, film.title,inventory.film_id as inventory_film_id from film
left outer join inventory
on film.film_id = inventory.film_id
where inventory.film_id is null

--14

select city.city, country.country from city
left outer join country
on city.country_id = country.country_id