// Codigo JS para el formulario

document.getElementById("formContacto").addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const resultado = document.getElementById("resultado");
    let tipo = document.getElementById("tipo").value;

// Validación de campos vacíos
    if (!nombre || !email || !mensaje) {
        resultado.innerHTML = '<div class="alert alert-danger">Completa todos los campos, por favor.</div>';
        return;
    }

// Validación correo
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        resultado.innerHTML = '<div class="alert alert-danger">Ingresa un correo electrónico válido.</div>';
        return;
    }

// Asignacion al tipo de solicitud
    const palabrasClave = { "compra": "Compra", "venta": "Venta" };
    Object.keys(palabrasClave).forEach(clave => {
        if (mensaje.toLowerCase().includes(clave)) {
            tipo = palabrasClave[clave];
        }
    });

// Mensaje de confirmación
    resultado.innerHTML = `
        <div class="alert alert-success">
            Estimado ${nombre}, tu solicitud ha sido recibida. Recibirás un correo con la información solicitada.<br>
            <strong>Tipo de solicitud:</strong> ${tipo}
        </div>
    `;
});