--ex 1

--1

select * from language

--2

select film.title, film.description, language.name from film left outer join language
on film.language_id = language.language_id

--3

select film.title, film.description, language.name from film right outer join language
on language.language_id=film.language_id

--4

create table new_film(
id serial primary key,
name varchar (50) not null
)

insert into new_film (id, name)
values (1,'Titanic'),(2,'The Godfather');

--5

create table customer_review (
	review_id serial primary key,
	film_id integer not null,
	language_id integer not null,
	title varchar (100) not null,
	score integer not null,
	review_text text,
	last_update timestamp default current_timestamp,
	constraint fk_language_id foreign key (language_id) REFERENCES language(language_id),
	constraint fk_film_id foreign key (film_id) REFERENCES new_film(id) on DELETE CASCADE,
	constraint score_value check (score > 0 and score <= 10)
)

--6

insert into customer_review (film_id, language_id, title, score, review_text)
values (1,1,'1st review',10,'nice film'),(2,1,'2st review',8,'good film');

--7


delete from new_film
where name = 'Titanic'
select * from customer_review

