document.addEventListener("DOMContentLoaded", function () {
  const my_list = document.querySelector(".my_list");
  const btnRemove = document.getElementById("remove_item");
  const btnAdd = document.getElementById("add_item");
  const btnClear = document.getElementById("clear_list");

  btnAdd.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = "Item";
    my_list.appendChild(li);
    console.log("add li...");
  });

  btnRemove.addEventListener("click", function () {
    let li = document.querySelector("li");
    if (li != null) {
      li.remove();
      console.log("remove li...");
    }
  });

  btnClear.addEventListener("click", function () {
    my_list.innerHTML = "";
    console.log("removido todos los li...");
  });
});
