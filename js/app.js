// 1. Obtener los elementos HTML
const tarjeta = document.querySelector("#tarjeta");
const azul = document.querySelector("#azul");
const verde = document.querySelector("#verde");
const rojo = document.querySelector("#rojo");
const restablecer = document.querySelector("#restablecer");

// Función para cambiar el color de la tarjeta
function cambiarColor(color) {
    tarjeta.style.backgroundColor = color;
    tarjeta.style.color = "white";
}

// 2. Eventos de los botones de colores
azul.addEventListener("click", function () {
    cambiarColor("#2563eb");
});

verde.addEventListener("click", function () {
    cambiarColor("#16a34a");
});

rojo.addEventListener("click", function () {
    cambiarColor("#dc2626");
});

// 3. Restablecer el color original
restablecer.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "";
    tarjeta.style.color = "";
});