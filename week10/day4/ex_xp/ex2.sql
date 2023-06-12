select * from items
-- 1
select * from customers
-- 2
SELECT first_name || ' ' || last_name AS full_name
FROM customers;
-- 3
SELECT DISTINCT price
FROM items;
-- 4
SELECT * FROM customers ORDER BY first_name DESC;
-- 5
SELECT film_id, title, description, release_year, rental_rate 
FROM film 
ORDER BY rental_rate ASC;
-- 6
SELECT a.address, a.phone 
FROM address AS a 
JOIN city AS c ON a.city_id = c.city_id 
JOIN country AS co ON c.country_id = co.country_id 
WHERE co.country = 'United States' AND c.district = 'Texas';
-- 7
SELECT * FROM film WHERE film_id IN (15, 150);
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'YourFavoriteMovie';
-- 8
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title LIKE 'XY%';
-- 9
SELECT film_id, title, rental_rate 
FROM film 
ORDER BY rental_rate 
LIMIT 10;
-- 10
SELECT film_id, title, rental_rate 
FROM film 
WHERE film_id NOT IN (
    SELECT film_id 
    FROM film 
    ORDER BY rental_rate 
    LIMIT 10
) 
ORDER BY rental_rate 
LIMIT 10;
-- 11
SELECT c.first_name, c.last_name, p.amount, p.payment_date 
FROM customers AS c 
JOIN payment AS p ON c.customer_id = p.customer_id 
ORDER BY c.customer_id;
-- 12
SELECT f.film_id, f.title 
FROM film AS f 
LEFT JOIN inventory AS i ON f.film_id = i.film_id 
WHERE i.film_id IS NULL;
-- 13
SELECT ci.city, co.country 
FROM city AS ci 
JOIN country AS co ON ci.country_id = co.country_id;
-- 14
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date 
FROM customers AS c 
JOIN payment AS p ON c.customer_id = p.customer_id 
ORDER BY p.staff_id;



