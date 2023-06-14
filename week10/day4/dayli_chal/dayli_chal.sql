-- 1
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id 
NOT IN (SELECT id FROM SecondTab WHERE id IS NULL)
Sortie : 2
->La requête compte le nombre de lignes dans la 
table FirstTab où la colonne id n'existe pas dans la table SecondTab lorsque l'id est NULL.
-- 2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5)
Sortie : 2
->La requête compte le nombre de lignes dans la table FirstTab où la colonne id ne correspond pas à la valeur 5 dans la table SecondTab.
-- 3
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab)
Sortie : 0
->La requête compte le nombre de lignes dans la table FirstTab où la colonne id nexiste pas dans la table SecondTab.
-- 4
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL)
Sortie : 0
->La requête compte le nombre de lignes dans la table FirstTab où la colonne id nexiste pas dans la table SecondTab lorsque l'id n'est pas NULL. Puisque tous les identifiants de la table FirstTab sont NULL, le résultat sera 0.