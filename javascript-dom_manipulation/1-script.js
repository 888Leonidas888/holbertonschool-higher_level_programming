function changeColor() {
  const red_header = document.querySelector('header');
  red_header.style.color = '#FF0000';
}

document.getElementById('red_header').addEventListener('click', changeColor);
