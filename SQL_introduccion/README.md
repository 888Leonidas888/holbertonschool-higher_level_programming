# SQL

Es un lenguaje de consulta, usado en los tantos gestores de bases de datos, cabe mencionar que los diferentes gestores base de datos usa SQL pero con particularidades propias de cada gestor de bases de datos.

El nombre SQL sugiere que solo se puede hacer consultas, pero la verdad es que la potencia de SQL va mas alla de hacer consultas, se pueden hacer operaciones matemáticas, usar estructuras condicionales, bucles, variables, se puden hacer prodecimientos almacenados, triggers.

## BASE DE DATOS

Es un conjunto de información almacenada de forma organizada de tal forma que haga efeciente su manipulación.

## LDD (Data Definition Languaje)

Este subconjunto agrupa los comandos que afectan la estructura de la base de datos (CREATE, ALTER, DROP).

## LMD (Data Manipulation Languaje)

Este subconjunto grupa los comandos que afectan directamente a los registros (SELECT, INSERT, DELETE, UPDATE).

## CRUD

Este termino se refiera a crear, consultar, actualizar y eleminar registros.

- INSERT
- UPDATE
- SELECT
- DELETE

### Ejemplos:

### INSERT

    insert into [mi_tabla] (campo1, campo2) values (1, 'mi valor');
    insert into [mi_tabla] set campo1 = 2, campo2 = 'segundo valor';

### UPDATE

    update [mi_tabla] set campo2 = 'cambio de valor' where campo1 = 1;

### DELETE

    delete from [mi_tabla] where campo2 = 'segundo campo';

### SELECT

    select campo1, campo2 from [mi_tabla] order by name;
    select campo1, campo2 from [mi_tabla] order by desc;
    select campo1, campo2 from [mi_tabla] limit 1;
