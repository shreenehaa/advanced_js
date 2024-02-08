normalization-break down into tables

## 1st normalization

- no row order(no 2 information in single column like name and height)
- no mixing data type (height somewhere between 168 and 171 -->only numbers)
- table should have pk ()

## updation anomly

- if there are two rows if one is updated and other is not
- inconsistency of data

## 2st normalization

- non key atrributes should depend upon entire primary key
- else break into seperate table

## 3rd normal form

- every non key attribute should be depend upon whole key and nothing but the key
- every key should depend upon only primary key

## 4 th normal form

- avoid interdependency between keyss
- multivalued dependency in table must be multivalued dependency on key

## 5 th normal form

- cant break more than this

## ex 7

1 -->SELECT distinct building_name FROM buildings inner join Employees on Building_name=building;
2-->SELECT
FROM buildings ;
3-->SELECT distinct building_name, role FROM buildings left join employees on buildings.building_name=employees.building ;

## ex8

1-->SELECT name,role FROM employees where building is null;
2-->select building_name from buildings left join employees on Building_name=Building where building is null

## ex9

1-->SELECT title,((international_sales+domestic_sales)/1000000) as combined FROM movies inner join boxoffice on id=movie_id;
2-->SELECT title,(rating\*10) as rating_percent FROM movies inner join boxoffice on id=movie_id;

## ex10

2-->SELECT role,avg(years_employed) FROM employees group by role ;
3-->SELECT building,sum(years_employed) FROM employees group by(building) ;

## ex11

2-->SELECT \*,count(role) FROM employees group by role ;
3-->SELECT \*,sum(years_employed) FROM employees
where role="Engineer" ;

## ex12

1-->SELECT \*,count(title) FROM movies group by director;
2-->SELECT \*,sum((Domestic_sales+International_sales)) as tot_sales FROM movies inner join Boxoffice on id=movie_id group by director;

## ex13

2-->insert into boxoffice values(4,8.7,340000000,270000000);

## ex14

# ddl

- create
  - create table table_name(column_name data_type constrains,column_name1 datatype2);
  - float 3 precesion points,double 6,real 12
  - character,varchar(few lines),text
  - blob- to store binary data
- alter
  - adding column
    - alter table table_name add column data_type
  - removing column
    - alter table table_name drop column_to_be_deleted
  - rename table
    - alter table tablename rename to new_table_name
- droping tables
  - drop table if exist my_table_name

sql injection -write sql code in postman-to safe gaurd sanitize it
**validation on front and back end**- not mess up the database by users
**constraints** - not mess up database by backend developers - to make easier
