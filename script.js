//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
const btnToggle = document.querySelector('.btn-togle');
const menu = document.querySelector('.container__navegacion');



btnToggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none'
    btnToggle.classList.toggle('open'); // Agrega o quita la clase "open" al botón
    menu.classList.toggle('open'); // Agrega o quita la clase "open" al menú
});


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