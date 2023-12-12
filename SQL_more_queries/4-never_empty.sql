-- Se crea una tabla en la BBDD actual.
-- No debería fallar sí existe.

CREATE TABLE IF NOT EXISTS id_not_null (id INT DEFAULT 1, name VARCHAR(256));