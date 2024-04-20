$.getJSON('https://swapi-api.hbtn.io/api/people/5/?format=json')
  .done(function (data) {
    $('div#character').text(data.name);
  })
  .fail(function () {
    $('div#character').text('Not found character');
    console.log('Error: No se pudo procesar la solicitud.');
  });
