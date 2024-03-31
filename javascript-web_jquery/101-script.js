// Espera a que DOM cargue completamente
$(document).ready(function () {
  // Agregar li
  $('div#add_item').click(function () {
    $('ul.my_list').append('<li>Item</li>');
  });

  //   Eliminar li
  $('div#remove_item').click(function () {
    $('ul.my_list li:last-child').remove();
  });

  //   Limpiar my_list
  $('div#clear_list').click(function () {
    $('ul.my_list').empty();
  });
});
