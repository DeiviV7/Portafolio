

const enlaces = document.querySelectorAll('a[href^="#"]');

// Agrega un evento de clic a cada enlace
enlaces.forEach(enlace => {
  enlace.addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtiene el ID de la sección a la que se dirige el enlace
    const id = this.getAttribute('href');

    // Desplaza suavemente hacia la sección
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth' // Agrega el efecto de suavidad
    });
  });
});