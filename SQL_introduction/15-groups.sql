-- Este script agrupa los registros por puntaución y los cuenta.
SELECT score, COUNT(score) as number FROM second_table GROUP BY score;