// Espera a que el DOM cargue por completo
$(document).ready(function () {
  function translateGreet() {
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
  }

  //  Al hacer click
  $('#btn_translate').click(translateGreet);

  //   Al presionar ENTER
  $('#language_code').keypress(function (event) {
    if (event.keyCode === 13) {
      translateGreet();
    }
  });
});
