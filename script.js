// Seleccionamos el botón de la hamburguesa usando su clase.
const menuButton = document.querySelector('.menu-Hamburguesa');

// Seleccionamos el menú de navegación por su etiqueta <nav>.
const nav = document.querySelector('nav');

//Seleccionamos el botón para Modo por su ID.
const BotonModo = document.getElementById('Modo');

// 3. Añadimos un "escuchador de eventos" que se activa cuando se hace clic en el botón.
menuButton.addEventListener('click', () => {
    nav.classList.toggle('activo');
    // classList.toggle('activo') hace dos cosas:
    // - Si el <nav> NO tiene la clase 'activo', se la añade.
    // - Si el <nav> SÍ tiene la clase 'activo', se la quita.
    // Esto permite abrir y cerrar el menú con el mismo botón.
});

BotonModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); //Se añade o quita la clase dark-mode al HTML
    if (document.body.classList.contains('dark-mode')) {
        BotonModo.textContent = '☀️'; // Cambia a sol si está en modo oscuro
    } else {
        BotonModo.textContent = '🌙'; // Cambia a luna si está en modo claro
    }
});