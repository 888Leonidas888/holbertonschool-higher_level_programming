-- Lista todas las ciudades contenidas en hbtn_0d_usa

SELECT c.id, c.name, s.name FROM cities as c JOIN states as s ON c.state_id = s.id ORDER BY c.id ASC;