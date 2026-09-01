#SELECT * FROM .jsd sales;
use jsd;
#create table stud1(rno int, sname varchar(20),mark int check(mark>=1 and mark<=100)); #check to used for the don't go highest value
#insert into stud1 values(1004,'yuva',0);
#select * from stud1;
#create table stud2(rno int ,sname varchar(22),mark int not null);
#insert into stud2 values(1002,'null',44);
#select*from stud2;
#Forign key


#create table tb1(rno int primary key,sname varchar(22),mark int);
#create table tb2(rno int primary key,sname varchar(22),mark int, foreign key(rno) references tb1(rno));
insert into tb1 values(1006,'sandy',59),(1001,'hema',99),(1002,'ammu',89),(1003,'kaviya',79),(1004,'kavin',69);
insert into tb2 values(1004,'ramesh',89);
select * from tb1;
select * from tb2;
