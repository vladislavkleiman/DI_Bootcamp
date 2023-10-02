--1

select * from students;

--2

select first_name, last_name from students;

--3.1

select first_name, last_name from students where id = 2;

--3.2

select first_name, last_name from students where first_name = 'Marc' and last_name = 'Benichou';

--3.3

select first_name, last_name from students where first_name = 'Marc' or last_name = 'Benichou';

--3.4

select first_name, last_name from students where first_name ilike '%a%';

--3.5

select first_name, last_name from students where first_name like 'A%';

--3.6

select first_name, last_name from students where first_name like '%a';

--3.7

select first_name, last_name from students where first_name like '%a_';

--3.8

select first_name, last_name from students where id = 2 and id = 3;

--4

select * from students where birth_date >= '01/01/2000';


