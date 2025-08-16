# Dashboard de Ventas Interactivo

Este es el repositorio para un proyecto de dashboard de ventas, diseñado para ser moderno, responsivo y accesible.

---

## 📜 Descripción del Proyecto

El objetivo de este proyecto es crear una dashboard que sirva como una interfaz central para monitorear indicadores de ventas.
La página principal presenta tarjetas de resumen y gráficos 
El diseño es limpio con una fuerte orientación a la experiencia de usuario y la accesibilidad.

---

## 🛠️ Tecnologías Usadas

Este proyecto fue construido utilizando tecnologías web fundamentales, sin frameworks, para asegurar un rendimiento óptimo y un código base ligero.

* **HTML5:** Para la estructura semántica y accesible del contenido.
* **CSS3:** Para el diseño visual, incluyendo:
    * **CSS Grid Layout:** Para la maquetación principal de la página.
    * **Flexbox:** Para alinear y distribuir el contenido dentro de los componentes.
    * **Variables CSS:** Para una gestión de temas (modo claro/oscuro) eficiente y mantenible.
    * **Media Queries:** Para asegurar un diseño completamente responsivo.
* **JavaScript (Vanilla):** Para la interactividad, como el menú de hamburguesa y el cambio de tema, utilizando manipulaciones del DOM.
* **Git y GitHub:** Para el control de versiones y el alojamiento del proyecto.

---

## ✨ Características Clave

* **Diseño Responsivo:** Se adapta perfectamente a pantallas de escritorio, tablet y celulares.
* **Tema Claro y Oscuro:** Incluye un interruptor para cambiar entre modos de visualización claro y oscuro.
* **Accesibilidad (A11y):** Implementa roles ARIA y navegación por teclado para ser usable por todos los usuarios.
* **Interactivo:** Elementos como el menú de navegación se controlan dinámicamente con JavaScript.

---

## 📸 Capturas de Pantalla



---

## 🎨 Decisiones de Diseño y Accesibilidad

### Diseño

1.  **Layout Principal con CSS Grid:** Elegí CSS Grid para la maquetación general (`header`, `nav`, `main`, `footer`) porque ofrece un control robusto, ideal para definir las áreas principales de la página de forma explícita y mantenible.
2.  **Alineación con Flexbox:** Dentro de cada componente (`header`, `nav`, `main`) utilicé Flexbox para alinear los elementos internos ya que es la herramienta perfecta para distribuir espacio, centrar contenido y asegurar que los elementos se comporten de manera predecible.
3.  **Variables CSS:** La implementación del modo claro y oscuro se basa en variables CSS (`--color-fondo`, `--color-texto`, etc.). Esto permite cambiar el tema completo del sitio simplemente alternando una clase en el `<body>`, lo cual es extremadamente eficiente y fácil de escalar.

### Accesibilidad

1.  **HTML Semántico:** El uso de etiquetas como `<header>`, `<nav>`, `<main>` y `<footer>` proporciona una estructura clara que los lectores de pantalla pueden interpretar correctamente sin necesidad de roles ARIA adicionales, aunque se incluyeron para reforzar el significado.
2.  **Roles ARIA:** Se añadieron roles como `role="navigation"` y `role="main"` para mejorar la compatibilidad con tecnologías de asistencia más antiguas y ofrecer atajos de navegación.
3.  **Navegación por Teclado:** Se aseguró que todos los elementos interactivos (botones, enlaces) sean accesibles y operables mediante la tecla `Tab`. Se mantuvo el `outline` del navegador por defecto para garantizar que el foco sea siempre visible.
4.  **Atributos `aria-*`:** Los botones interactivos utilizan atributos como `aria-expanded` y `aria-pressed` para comunicar su estado (abierto/cerrado, activado/desactivado) a los usuarios de lectores de pantalla.