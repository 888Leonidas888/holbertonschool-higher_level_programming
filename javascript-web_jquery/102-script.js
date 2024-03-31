// Espera a que el DOM cargue por completo
$(document).ready(function () {
  $('#btn_translate').click(function () {
    const lenguageCode = $('#language_code').val();

    if (lenguageCode.length !== 2) {
      alert('El código deber ser 2 caracteres.');
    } else {
      $.getJSON(`https://hellosalut.stefanbohacek.dev/?lang=${lenguageCode}`)
        .done(function (data) {
          $('#hello').text(data.hello);
        })
        .fail(function () {
          alert('Houston tenemos un problema.');
        });
    }
  });
});
