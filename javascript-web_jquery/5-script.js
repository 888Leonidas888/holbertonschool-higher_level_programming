const btnAddItem = $('div#add_item');
btnAddItem.click(function () {
  $('ul.my_list').append('<li>Item</li>');
});
