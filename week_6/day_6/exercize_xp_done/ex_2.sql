-- ex 2

--1

update film set language_id=3 where title='Airport Pollock'


--3

drop table customer_review

--4

select count(*) from rental where return_date is null

--5

select film.film_id, film.title, film.rental_rate, inventory.inventory_id, inventory.film_id, rental.inventory_id,rental.rental_id from film
inner join inventory on film.film_id=inventory.film_id
inner join rental on inventory.inventory_id=rental.inventory_id
order by rental_rate desc LIMIT 30

--6
--6.1

select film.film_id, film.description, film_actor.film_id, film_actor.actor_id, film.fulltext, actor.actor_id, actor.first_name, actor.last_name from film
inner join film_actor on film.film_id = film_actor.film_id
inner join actor on film_actor.actor_id = actor.actor_id
where film.fulltext @@ to_tsquery ('sumo') and actor.first_name='Penelope'and actor.last_name='Monroe'

--6.2

select film.film_id, film.description, film.length,film.rating, film_category.film_id, film_category.category_id, category.category_id, category.name from film
inner join film_category on film.film_id=film_category.film_id
inner join category on film_category.category_id=category.category_id
where film.length <=60 and film.rating='R' and category.name = 'Documentary'

--6.3

select customer.customer_id, customer.first_name, customer.last_name, payment.customer_id, payment.rental_id, payment.amount, rental.rental_id, rental.rental_date, rental.return_date from customer
inner join payment on customer.customer_id=payment.customer_id
inner join rental on payment.rental_id=rental.rental_id
where first_name='Matthew' and last_name='Mahan' and amount > 4 and return_date between '2005-07-28' and '2005-08-01'

--6.4
-- фильм с инвентори по фильм айди
--инвентори с рентал по инвентори айди
--нетал с кастомер по кастомер айди
--where first_name='Matthew' and last_name='Mahan' 

select * from film
select * from customer
select * from rental
select * from inventory

select film.film_id, film.title, film.description,film.replacement_cost, inventory.film_id, inventory.inventory_id, rental.inventory_id, rental.customer_id, customer.customer_id from film
inner join inventory on film.film_id=inventory.film_id
inner join rental on inventory.inventory_id=rental.inventory_id
inner join customer on rental.customer_id=customer.customer_id
where first_name='Matthew' and last_name='Mahan' and (title ilike '%boat%' or description ilike '%boat%')
order by film.replacement_cost DESC
limit 1