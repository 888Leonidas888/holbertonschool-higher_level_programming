document.addEventListener("DOMContentLoaded", function () {
  const btnTranslate = document.getElementById("btn_translate");
  const status = document.querySelector(".status");
  const textStatus = document.querySelector(".text-status");
  const helloElement = document.getElementById("hello");

  btnTranslate.addEventListener("click", function () {
    const languageCode = document.getElementById("language_code");
    const index = languageCode.selectedIndex;

    if (index !== 0) {
      status.style.display = "none";
      const selectedValue = languageCode.options[index].value;
      const apiUrl = `https://hellosalut.stefanbohacek.dev/?lang=${selectedValue}`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la solicitud: " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          helloElement.innerText = data.hello;
        })
        .catch((error) => {
          console.error("Error:", error.message);
          alert(
            "Se produjo un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde."
          );
        });
    } else {
      helloElement.innerText = "";
      status.style.display = "block";
    }
  });
});
