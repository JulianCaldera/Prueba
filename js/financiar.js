/* Funcion del menú */
function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

/* Validacion obligatoria */
const form = document.getElementById("formulario");
const submitBtn = document.getElementById("submit-btn");

function validarInput(id, regex, mensaje) {
    let input = document.getElementById(id);
    let error = document.getElementById("error-" + id);

    if (!input.value.trim()) {
        error.textContent = "Este campo es obligatorio";
        return false;
    } else if (!regex.test(input.value.trim())) {
        error.textContent = mensaje;
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validarFormulario() {
    let esValido = true;

    esValido &= validarInput("nombre", /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, "Solo letras");
    esValido &= validarInput("apellidos", /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, "Solo letras");
    esValido &= validarInput("documento", /^[0-9]+$/, "Solo números, sin espacios ni puntos");
    esValido &= validarInput("contacto", /^[0-9]{7,10}$/, "Debe tener entre 7 y 10 dígitos");
    esValido &= validarInput("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Correo inválido");
    esValido &= validarInput("proyectos", /.+/, "No puede estar vacío");
    esValido &= validarInput("solicitud", /.+/, "No puede estar vacío");

    // Habilita o deshabilita el botón según si el formulario es válido
    submitBtn.disabled = !esValido;
}

// Detectar cambios en los inputs y validar en tiempo real
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", validarFormulario);
});

// Evitar envío si hay errores
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!submitBtn.disabled) {
        alert("Formulario enviado correctamente.");
    }
});