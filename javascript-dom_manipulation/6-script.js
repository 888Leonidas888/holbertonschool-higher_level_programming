const urlBase = "https://swapi-api.hbtn.io/api/people/5/?format=json";
fetch(urlBase)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error request failed!!!");
    }

    return response.json();
  })
  .then((data) => {
    const character = data.name;
    const characterElement = document.getElementById("character");
    characterElement.innerText = character;
  })
  .catch((error) => {
    console.error("Case: ", error);
  });

// Estructura de fetch
// fetch(url)
//     .then(response => {
//         // Manipulación de la respuesta
//     })
//     .then(data => {
//         // Manipulación de los datos
//     })
//     .catch(error => {
//         // Manejo de errores
//     });

// fetch().then().then().catch()
