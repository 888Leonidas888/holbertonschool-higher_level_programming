function updateHeaderText() {
  const header = document.getElementsByTagName("header")[0];
  header.innerText = "New Header!!!";
}

document
  .getElementById("update_header")
  .addEventListener("click", updateHeaderText);
