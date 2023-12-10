-- Este script lista campos no vacios en nombre,
-- muestra el score, name en orden desc score.
SELECT score, name FROM second_table WHERE name != '' ORDER BY score DESC;