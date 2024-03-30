$.getJSON('https://swapi-api.hbtn.io/api/films/?format=json')
  .done(function (data) {
    $.each(data.results, function (index, movie) {
      $('#list_movies').append(`<li>${movie.title}</li>`);
    });
  })
  .fail(function () {
    console.log('Error: No se pudo completar la opeación.');
  });
