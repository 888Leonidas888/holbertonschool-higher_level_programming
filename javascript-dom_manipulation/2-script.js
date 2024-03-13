function addClassElement() {
  const header = document.querySelector("header");
  header.classList.add("red");
}

document.getElementById("red_header").addEventListener("click", addClassElement);
