-- Listar privilegios de usuarios.
-- SELECT FROM mysql.user WHERE User IN ('user_0d_1','user_0d_2');
SHOW GRANTS FOR 'user_0d_1'@'localhost';
SHOW GRANTS FOR 'user_0d_2'@'localhost';