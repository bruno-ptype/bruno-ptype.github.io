// Muestra el modal con el nombre de la obra
function mostrarDetalle(nombreObra) {
    const modal = document.getElementById("modal");
    const contenido = document.getElementById("modal-contenido");
    contenido.textContent = "Detalle de la obra: " + nombreObra;
    modal.style.display = "flex"; 
}

// Funciones para mostrar la informacion del cuadro 

const imagenes = document.querySelectorAll(".img-thumbnail");
imagenes.forEach(function(img) {
    img.addEventListener("click", function() {
        const nombre = img.getAttribute("data-nombre");
        mostrarDetalle(nombre); 
    });
});

// Cierra el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Para que el Modal no inicie al abrir la pag

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; 
});


// Boton para eliminar la imagen 
const botonesEliminar = document.querySelectorAll(".eliminar-btn");
botonesEliminar.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const contenedor = boton.parentElement;
        contenedor.remove();
    });
});