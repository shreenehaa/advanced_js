## ex1

- SELECT title FROM movies;
- SELECT director FROM movies;
- SELECT title ,director FROM movies;
- SELECT title , year FROM movies;
- SELECT \* FROM movies;

## ex 2

- SELECT \* FROM movies where id=6;
- SELECT \* FROM movies where year between 2000 and 2010;
- SELECT \* FROM movies where year not between 2000 and 2010;
- SELECT \* FROM movies where id<6;

## ex3

- SELECT \* FROM movies where title like "toy story%";
- SELECT \* FROM movies where director like "john lasseter";
- SELECT \* FROM movies where director not like "john lasseter";
- SELECT \* FROM movies where title like "wall-%";

## ex4

- SELECT distinct director FROM movies order by director asc;
- SELECT \* FROM movies order by year desc limit 4;
- select \* from movies order by title limit 5;
- select \* from movies order by title limit 5 offset 5;

## ex5

- SELECT \* FROM north_american_cities where country like "canada";
- SELECT \* FROM north_american_cities where country like "United States" order by latitude desc;
- SELECT \* FROM north_american_cities where longitude<(select longitude from north_american_cities where city like "chicago") order by longitude desc ;
- SELECT city from north_american_cities where country like "mexico" order by population desc limit 2
- SELECT city from north_american_cities where country like "united states" order by population desc limit 2 offset 2

## EX6

- SELECT \* FROM movies inner join boxoffice on id=movie_id;
- SELECT \* FROM movies inner join boxoffice on id=movie_id where international_sales >domestic_sales;
- SELECT \* FROM movies inner join boxoffice on id=movie_id order by rating desc;

## EX7

- SELECT distinct building_name FROM employees inner join buildings on building_name=building;
- select \* from buildings
- select distinct building_name,role from buildings left join employees on building_name=building;

## ex8

- SELECT \* FROM employees where building is null;
- select building_name from buildings left join employees on building_name=building where building is null
