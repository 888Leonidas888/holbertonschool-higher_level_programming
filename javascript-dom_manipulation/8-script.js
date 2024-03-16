fetch("https://hellosalut.stefanbohacek.dev/?lang=fr")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    let greet = data.hello;
    const elementHello = document.getElementById("hello");
    elementHello.innerText = greet;
  })
  .catch((error) => {
    console.error(error);
  });
