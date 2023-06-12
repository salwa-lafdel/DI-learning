select*from actor
-- 1
SELECT COUNT(*) AS actor_count FROM actor;
-- 2
-- si les champs sont autorisés à être vides (NULL) ou si aucune contrainte de non-nullité n'est définie, 
-- l'insertion d'un nouvel acteur avec des champs vides sera effectuée sans erreur.
-- Dans ce cas, une nouvelle ligne sera ajoutée à la table avec les champs vides.

