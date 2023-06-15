-- 1
UPDATE films
SET language = 'NewLanguage'
WHERE film_id IN (1, 2, 3);
