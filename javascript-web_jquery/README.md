# jQuery: Librería de JavaScript para Simplificar la Manipulación del DOM

![Librería jquery](https://www.tutorialrepublic.com/lib/images/jquery-illustration.png)

## Descripción

jQuery es una biblioteca de JavaScript rápida, pequeña y rica en funciones que simplifica la manipulación del Document Object Model (DOM) en páginas web. Su objetivo principal es hacer que la escritura de JavaScript sea más fácil y rápida.

## Instalación

No es necesario instalar jQuery en tu sistema. Puedes incluirlo directamente en tu proyecto desde un CDN (Content Delivery Network). Simplemente agrega el siguiente script en la sección `<head>` de tu HTML:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

## Usos

### Seleción de elementos

jQuery permite seleccionar elementos del DOM de manera similar a como lo harías con CSS. Por ejemplo, para seleccionar todos los elementos `<p>` del documento, puedes usar:

```javascript
$('p');
```

### Manipulación del DOM

Una de las principales utilidades de jQuery es manipular el DOM de forma sencilla. Por ejemplo, para ocultar un elemento con el id `miElemento`, puedes hacer lo siguiente:

```javascript
$('#miElemento').hide();
```

### Eventos

jQuery simplifica el manejo de eventos en el navegador. Por ejemplo, para ejecutar una función cuando se haga clic en un botón con el id `miBoton`, puedes hacer lo siguiente:

```javascript
$('#miBoton').click(function () {
  alert('¡Haz hecho clic en el botón!');
});
```

### Animaciones

jQuery facilita la creación de animaciones en tu sitio web. Por ejemplo, para animar el desvanecimiento de un elemento con el id `miElemento`, puedes hacer lo siguiente:

```javascript
$('#miElemento').fadeOut();
```

### Ajax

jQuery simplifica las solicitudes Ajax en tu aplicación web. Por ejemplo, para realizar una solicitud **GET** a un servidor y manejar la respuesta, puedes hacer lo siguiente:

```javascript
$.get('mi-url', function (data) {
  console.log('Respuesta del servidor:', data);
});
```

## Sitio oficial

- [jquery](https://jquery.com/)
