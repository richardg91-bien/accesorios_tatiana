// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar el script.
// --- Animación del Banner Superior (Scroll Infinito) ---
  // Selecciona el contenedor principal del banner.
  const banner = document.querySelector('.banner');
  if (banner) {
    // Selecciona el 'track' que contiene los mensajes y el contenido original de los mensajes.
    const track = banner.querySelector('.banner-track');
    const content = banner.querySelector('.banner-content');

    // Verifica que los elementos existan y que haya contenido para clonar.
    if (track && content && content.children.length > 0) {
      // Clona el contenido original de los mensajes.
      const clone = content.cloneNode(true);
      // Añade el clon al final del 'track'.
      // Esto crea una secuencia duplicada que permite la ilusión de scroll infinito con CSS.
      track.appendChild(clone);
    } else {
      // Muestra errores o advertencias en la consola si los elementos no se encuentran o no hay contenido.
      if (!track) console.error('JS ERROR: Elemento .banner-track no encontrado dentro de .banner para la animación.');
      if (!content) console.error('JS ERROR: Elemento .banner-content no encontrado dentro de .banner para la animación.');
      if (content && content.children.length === 0) console.warn('JS WARN: .banner-content no tiene elementos hijos para clonar en la animación del banner.');
    }


    console.warn('JS WARN: Elemento .banner no encontrado. La animación del banner no se iniciará.');
  }

  // --- Carrusel de Imágenes Principal (Hero Carousel) ---
  let currentIndex = 0; // Índice para rastrear la imagen actual.
  // Selecciona todas las imágenes dentro del carrusel.
  const images = document.querySelectorAll('.hero-carousel img');
   if (images.length > 0) { // Procede solo si hay imágenes.
    // Función para mostrar la siguiente imagen.
    function showNextImage() {
      if (images[currentIndex]) { // Verifica que la imagen actual en el índice exista.
        images[currentIndex].classList.remove('active'); // Quita la clase 'active' de la imagen actual.
      }
      currentIndex = (currentIndex + 1) % images.length; // Calcula el índice de la siguiente imagen, ciclando al principio si es necesario.
      if (images[currentIndex]) { // Verifica que la nueva imagen en el índice exista.
        images[currentIndex].classList.add('active'); // Añade la clase 'active' a la nueva imagen.
      }
    }
    if (images[0]) { // Verifica que la primera imagen exista.
      images[0].classList.add('active'); // Activa la primera imagen al cargar la página.
    }
    setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos (3000 ms).
  } else {
    console.warn('JS WARN: No se encontraron imágenes para .hero-carousel img. El carrusel no se iniciará.');
  }

  // --- Lógica de Scroll para el Header Interactivo (#mainHeader) ---
  // Obtiene los elementos del DOM: el header principal y el carrusel héroe.
  const header = document.getElementById('mainHeader');
  const heroCarousel = document.querySelector('.hero-carousel');

  // Procede solo si ambos elementos existen en la página.
  if (header && heroCarousel) {
    const headerHeight = header.offsetHeight; // Altura del header, usada en los cálculos.
    
    // Nota: heroCarousel.offsetTop y heroCarousel.offsetHeight se obtienen dentro de handleHeaderScroll
    // para asegurar que los valores sean correctos incluso si hay carga diferida de imágenes u otros elementos.

    // Función que maneja la lógica de añadir/quitar la clase 'scrolled' al header.
    function handleHeaderScroll() {
      // Posición vertical actual del scroll.
      const scrollY = window.scrollY;
      // Límite superior del carrusel héroe (distancia desde el tope del documento).
      const heroCarouselTop = heroCarousel.offsetTop;
      // Altura total del carrusel héroe.
      const heroCarouselHeight = heroCarousel.offsetHeight;
      // Límite inferior del carrusel héroe.
      const heroCarouselBottom = heroCarouselTop + heroCarouselHeight;

      // --- Lógica de decisión para el estado del header ---
      // El objetivo es que el header sea transparente cuando se superpone significativamente con el heroCarousel,
      // y opaco (con la clase 'scrolled') en otros casos (antes del carrusel si hay espacio, o después del carrusel).

      if (heroCarouselTop > headerHeight && scrollY < (heroCarouselTop - headerHeight)) {
        // CASO 1: Hay espacio entre el tope de la página y el inicio del heroCarousel,
        // y el scroll actual está en ese espacio (antes de alcanzar el punto donde el header tocaría el carrusel).
        // En este caso, el header debe ser opaco.
        header.classList.add('scrolled');
      } else if (scrollY < (heroCarouselBottom - headerHeight)) {
        // CASO 2: El scroll está DENTRO del área del heroCarousel.
        // Específicamente, mientras la parte visible del scroll (scrollY) no haya superado
        // el final del carrusel menos la altura del propio header.
        // Esto asegura que el header sea transparente mientras haya contenido del carrusel debajo de él.
        // Cubre también el caso donde el heroCarousel está pegado al tope (heroCarouselTop es pequeño).
        header.classList.remove('scrolled');
      } else {
        // CASO 3: El scroll ha superado la mayor parte del heroCarousel.
        // Es decir, el usuario ha hecho scroll más allá del punto donde el carrusel ya no está
        // significativamente debajo del header. El header debe ser opaco.
        header.classList.add('scrolled');
      }
    }
    if (header && heroCarousel) {
    // Ejecuta la función una vez al cargar la página.
    // Esto es importante para establecer el estado inicial correcto del header,
    // por si la página se carga ya con scroll, o si el heroCarousel no está en el tope.
    handleHeaderScroll(); 
    
    // Añade un event listener al evento 'scroll' de la ventana.
    // La función handleHeaderScroll se llamará cada vez que el usuario haga scroll.
    window.addEventListener('scroll', handleHeaderScroll);

  } else {
    // Muestra errores en la consola si los elementos cruciales para esta funcionalidad no se encuentran.
    if (!header) console.error('JS ERROR: Elemento header con ID "mainHeader" no encontrado. La funcionalidad de scroll del header no se activará.');
    if (!heroCarousel) console.error('JS ERROR: Elemento con clase "hero-carousel" no encontrado. La funcionalidad de scroll del header no se activará.');
  }
};
