--part2
--1

create table book(
	book_id SERIAL PRIMARY KEY,
	title VARCHAR NOT NULL,
	author VARCHAR NOT NULL
)

--2
insert into book (title, author)
values ('Alice In Wonderland','Lewis Carroll'),('Harry Potter','J.K Rowling'),('To kill a mockingbird','Harper Lee');

--3

create table student(
	student_id SERIAL PRIMARY KEY,
	name varchar NOT NULL UNIQUE,
	age integer NOT NULL
)

select * from student

--4

insert into student (name, age)
values ('John',12),('Lera',11),('Patrick',10),('Bob',14);

--5

create table library(
	book_fk_id serial PRIMARY KEY REFERENCES book (book_id) ON UPDATE CASCADE,
	student_fk_id serial REFERENCES student (student_id) ON UPDATE CASCADE,
	borrowed_date date NOT NULL,
	FOREIGN KEY (book_fk_id) REFERENCES book (book_id),
	FOREIGN KEY (student_fk_id) REFERENCES student (student_id)
)

select * from library

--6

insert into library (student_fk_id, borrowed_date)
values (1,'15/02/2022'),(4,'03/03/2021'),(2,'23/05/2021'),(4,'12/08/2021');

select * from book

