SELECT DISTINCT language_name FROM films;

SELECT films.film_title, films.description, languages.language_name
FROM films
LEFT JOIN languages ON films.language_id = languages.language_id;

SELECT films.film_title, films.description, languages.language_name
FROM languages
LEFT JOIN films ON languages.language_id = films.language_id;


CREATE TABLE new_film (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
    ('Film A'),
    ('Film B'),
    ('Film C');
	
	CREATE TABLE customer_review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    film_id INT,
    language_id INT,
    title VARCHAR(255),
    score INT,
    review_text TEXT,
    last_update TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);


INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES
    (1, 1, 'Review 1', 8, 'This is a great film!', NOW()),
    (2, 2, 'Review 2', 6, 'Not bad, but could be better.', NOW());
	
	
	---->Lorsque vous supprimez un film de la table "new_film", la contrainte DELETE CASCADE sur la relation de clé étrangère avec la table "customer_review" supprimera automatiquement les critiques associées dans la table "customer_review".



----exercice2
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'Spanish')
WHERE film_id IN (1, 2, 3);


DROP TABLE customer_review;

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;


SELECT f.title, p.amount
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE r.return_date IS NULL
ORDER BY p.amount DESC
LIMIT 30;



SELECT title
FROM film
WHERE description LIKE '%sumo wrestler%'
AND film_id IN (
    SELECT film_id
    FROM film_actor
    WHERE actor_id IN (
        SELECT actor_id
        FROM actor
        WHERE first_name = 'Penelope' AND last_name = 'Monroe'
    )
);


SELECT title
FROM film
WHERE length < 60
AND rating = 'R';


SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN staff s ON r.staff_id = s.staff_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


SELECT title
FROM film
WHERE (title LIKE '%boat%' OR description LIKE '%boat%')
AND film_id IN (
    SELECT film_id
    FROM inventory
    WHERE inventory_id IN (
        SELECT inventory_id
        FROM rental
        WHERE customer_id IN (
            SELECT customer_id
            FROM customer
            WHERE first_name = 'Matthew' AND last_name = 'Mahan'
        )
    )
)
ORDER BY replacement_cost DESC
LIMIT 1;



