--part 1

--1
create table customer (
	id serial primary key,
	first_name varchar not null,
	last_name varchar not null
)

create table customer_profile (
	id serial primary key,
	isLoggedIn BOOLEAN DEFAULT FALSE,
	customer_id serial not null,
	constraint fk_id foreign key (customer_id) references customer (id)
)

--2

insert into customer (first_name, last_name)
values ('John', 'Doe'), ('Jerome', 'Lalu'),('Lea', 'Rive');
select * from customer

--3

insert into customer_profile (isLoggedIn, customer_id)
values (false, 1), (true, 2);

select * from customer_profile

--4
--4.1

select customer.first_name, customer_profile.isLoggedIn from customer
inner join customer_profile
on customer.id=customer_profile.customer_id
where isLoggedIn='false'

--4.2

select customer.first_name, customer_profile.isLoggedIn from customer
left outer join customer_profile
on customer.id=customer_profile.customer_id

--4.3

select count(*) from customer
where not exists (select 1 from customer_profile where customer.id=customer_profile.customer_id)



