function changeColor() {
  const red_header = document.getElementById("red_header");
  red_header.style.color = "#FF0000";
}

document.getElementById("red_header").addEventListener("click", changeColor);
