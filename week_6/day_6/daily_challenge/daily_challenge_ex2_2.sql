create table library(
    book_fk_id integer REFERENCES book (book_id) ON UPDATE CASCADE,
    student_fk_id integer REFERENCES student (student_id) ON UPDATE CASCADE,
    borrowed_date date NOT NULL
)


--6

insert into library (book_fk_id, student_fk_id, borrowed_date)
values (1,1,'2022-02-15'),(3,4,'2021-03-03'),(1,2,'2021-05-23'),(2,4,'2021-08-12');

select * from library




