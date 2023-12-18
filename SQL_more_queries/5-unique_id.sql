-- Crea un tabla unique_id
IF TABLE NOT EXISTS CREATE unique_id (id INT DEFAULT 1, name VARCHAR(256), PRIMARY KEY (id))