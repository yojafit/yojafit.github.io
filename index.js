// index.js

// 1) Variable que guarda el número de clics
let contador = 0;

// 2) Obtenemos referencias al <p> y al <button>
const display = document.getElementById('Contador');             // <p id="Contador">
const boton   = document.querySelector('.container button');     // <button> dentro de .container

// 3) Función que incrementa el contador y actualiza el <p>
function incrementar() {
  contador++;
  display.innerText = contador;
}

// 4) Conectamos el botón al evento click
boton.addEventListener('click', incrementar);
