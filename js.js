// Selección de calificación
let calificacionSeleccionada = null;

const botonesCalificacion = document.querySelectorAll('.btn');
const botonEnviar = document.querySelector('.enviar');
const tarjetaAgradecimiento = document.querySelector('.thank-you-card');

// Agregar eventos a los botones de calificación
botonesCalificacion.forEach(boton => {
  boton.addEventListener('click', (e) => {
    calificacionSeleccionada = e.target.textContent;
    botonesCalificacion.forEach(boton => boton.classList.remove('selected')); // Opcional: elimina selección previa
    e.target.classList.add('selected'); // Resalta el botón seleccionado
  });
});

// Manejar el evento de envío
botonEnviar.addEventListener('click', () => {
  if (calificacionSeleccionada !== null) {
    // Actualizar el mensaje en la tarjeta de agradecimiento
    tarjetaAgradecimiento.innerHTML = `<h2>¡Gracias!</h2><p>Seleccionaste una calificación de ${calificacionSeleccionada}</p>`;
    tarjetaAgradecimiento.style.display = 'block'; // Muestra la tarjeta
  }
});
