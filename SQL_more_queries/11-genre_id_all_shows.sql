--    SELECT tv_shows.title, IFNULL(tv_show_genres.genre_id, 'NULL')
--      FROM tv_shows 
-- LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id 
--  ORDER BY tv_shows.title ASC, tv_show_genres.genre_id ASC;

-- SELECT tv_shows.title, IFNULL(tv_show_genres.genre_id, 'NULL') AS genre_id
-- FROM tv_shows
-- LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
-- ORDER BY tv_shows.title ASC, genre_id ASC;

-- SELECT tv_shows.title, tv_show_genres.genre_id
-- FROM tv_shows
-- LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
-- WHERE tv_show_genres.genre_id IS NOT NULL
-- ORDER BY tv_shows.title ASC, tv_show_genres.genre_id ASC;

   SELECT tv_shows.title, tv_show_genres.genre_id
     FROM tv_shows 
LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id 
 ORDER BY tv_shows.title ASC, tv_show_genres.genre_id ASC;