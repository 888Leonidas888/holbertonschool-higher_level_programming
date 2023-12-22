-- Lista tv_shows - tv_show_genres, si no encuentra genre_id asociado
-- regresa NULL.

--    SELECT tv_shows.title, IFNULL(tv_show_genres.genre_id, 'NULL')
--      FROM tv_shows 
-- LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id 
--  ORDER BY tv_shows.title ASC, tv_show_genres.genre_id ASC;

   SELECT tv_shows.title, tv_show_genres.genre_id
     FROM tv_shows 
LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id 
 ORDER BY tv_shows.title ASC, tv_show_genres.genre_id ASC;