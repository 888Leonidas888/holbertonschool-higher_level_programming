-- Lista el número de programas por genero

  SELECT tv_genres.name AS genre, count(*) AS number_of_shows
    FROM tv_show_genres, tv_genres
   WHERE tv_show_genres.genre_id = tv_genres.id
GROUP BY genre_id
ORDER BY number_of_shows DESC;