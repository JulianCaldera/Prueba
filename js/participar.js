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