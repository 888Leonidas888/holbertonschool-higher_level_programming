const header = $('header');
const btn = $('div#red_header');
btn.on('click', function (event) {
  header.css('color', '#FF0000');
});
