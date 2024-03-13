# JavaScript DOM Manipulation

## JavaScript

JavaScript es un lenguaje de programación ampliamente utilizado, especialmente en el desarrollo web. Es un lenguaje interpretado y orientado a objetos, conocido por su versatilidad y capacidad para crear interactividad en las páginas web.

## ¿Por qué JavaScript?

- **Interactividad:** JavaScript permite agregar interactividad a las páginas web, como animaciones, validaciones de formularios y cambios dinámicos de contenido.
- **Compatibilidad con navegadores:** Es compatible con todos los navegadores web modernos y se ejecuta en el lado del cliente, lo que significa que los usuarios pueden ejecutar código JavaScript sin instalar ningún software adicional.
- **Amplia comunidad y recursos:** JavaScript tiene una gran comunidad de desarrolladores y una amplia gama de bibliotecas y frameworks que facilitan el desarrollo web.

## Funcionalidades principales

- **Manipulación del DOM:** JavaScript permite manipular el Document Object Model (DOM), lo que significa que puedes cambiar la estructura, el estilo y el contenido de una página web dinámicamente.
- **Gestión de eventos:** Puedes responder a acciones del usuario, como hacer clic en un botón o mover el mouse, utilizando eventos y manejadores de eventos en JavaScript.
- **AJAX:** JavaScript facilita la comunicación asincrónica con el servidor utilizando la técnica de AJAX (Asynchronous JavaScript and XML), lo que permite cargar y enviar datos sin tener que recargar la página completa.
- **Bibliotecas y frameworks:** Existen numerosas bibliotecas y frameworks de JavaScript, como React, Angular y Vue.js, que simplifican el desarrollo web al proporcionar herramientas y abstracciones para tareas comunes.

## Ejemplos de uso

```javascript
// Crear una función para saludar al usuario
function saludar(nombre) {
  alert("¡Hola, " + nombre + "!");
}

// Llamar a la función con un nombre específico
saludar("Juan");
```

## Acceso a elementos

JavaScript permite acceder a los elementos del DOM utilizando métodos como `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector` y `querySelectorAll`. Estos métodos devuelven referencias a los elementos del DOM, que luego se pueden manipular.

```javascript
// Acceder a un elemento por su ID
const elemento = document.getElementById("miElemento");

// Acceder a todos los elementos con una clase específica
const elementos = document.getElementsByClassName("miClase");

// Acceder al primer elemento que coincida con un selector CSS
const primerElemento = document.querySelector(".miSelector");

// Acceder a todos los elementos que coincidan con un selector CSS
const todosLosElementos = document.querySelectorAll(".miSelector");
```

## Manipulacion de contenido

JavaScript permite cambiar el contenido de los elementos del DOM, ya sea modificando su texto, atributos o incluso agregando o eliminando elementos completamente.

```javascript
// Modificar el contenido de un elemento
elemento.textContent = "Nuevo texto";

// Modificar un atributo de un elemento
elemento.setAttribute("href", "https://www.ejemplo.com");

// Crear un nuevo elemento y agregarlo al DOM
const nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "¡Nuevo elemento!";
document.body.appendChild(nuevoElemento);

// Eliminar un elemento del DOM
nuevoElemento.remove();
```

## Manipulación de estilos

JavaScript también permite cambiar los estilos CSS de los elementos del DOM dinámicamente.

```javascript
// Cambiar el color de fondo de un elemento
elemento.style.backgroundColor = "blue";

// Cambiar el tamaño de fuente de un elemento
elemento.style.fontSize = "20px";

// Agregar o quitar clases CSS de un elemento
elemento.classList.add("claseNueva");
elemento.classList.remove("claseAntigua");
```

## Gestión de eventos

JavaScript permite registrar eventos en elementos del DOM y responder a acciones del usuario, como hacer clic en un botón, mover el mouse sobre un elemento o enviar un formulario.

```javascript
// Registrar un evento de clic en un botón
boton.addEventListener("click", () => {
  console.log("¡El botón fue clickeado!");
});

// Registrar un evento de cambio en un campo de entrada
input.addEventListener("change", (event) => {
  console.log("El valor del campo es: ", event.target.value);
});
```
