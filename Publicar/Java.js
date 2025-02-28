
// Función para mostrar u ocultar el menú
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Alternar la clase 'active' en lugar de cambiar el display
}

document.querySelectorAll('.espacio').forEach(card => {
    card.addEventListener('click', () => {
        const cardElement = card.querySelector('.card');
        cardElement.classList.toggle('flipped'); // Añadir o quitar la clase 'flipped' para rotar la tarjeta
    });
});

// Esperar a que el DOM cargue completamente
window.onload = function () {
    document.querySelector("form").addEventListener("submit", mostrarMensaje);
};

window.onload = function () {
    document.querySelector("form").addEventListener("submit", mostrarMensaje);
};

function mostrarMensaje(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
   
    // Mostrar mensaje flotante
    let mensaje = document.getElementById("mensaje-exito");
    mensaje.classList.add("mensaje-mostrar");

    // Limpiar el formulario después de mostrar el mensaje
    document.querySelector("form").reset();

    // Ocultar el mensaje después de 4 segundos
    setTimeout(() => {
        mensaje.classList.remove("mensaje-mostrar");
    }, 4000);
}