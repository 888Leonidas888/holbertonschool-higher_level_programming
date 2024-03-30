const toggleHeader = $('div#toggle_header');
toggleHeader.click(function () {
  const header = $('header');
  header.toggleClass('red green');
});
