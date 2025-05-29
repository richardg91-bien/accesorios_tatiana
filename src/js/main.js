document.addEventListener('DOMContentLoaded', () => {
  console.log('main.js para banner ejecutado - INICIO');

  const bannerTrack = document.querySelector('.banner-track'); // Lo mantenemos por si acaso, pero no se usa activamente en esta prueba.
  const bannerContent = document.getElementById('bannerContent');

  if (bannerContent) {
    console.log('bannerContent encontrado:', bannerContent);
    bannerContent.style.border = '5px solid red';
    bannerContent.innerHTML += '<span style="color: red;"> [JS MODIFICADO!]</span>'; // Añadir algo visible
    console.log('Estilo de borde y contenido modificado en bannerContent.');
  } else {
    console.error('Error: No se encontró el elemento #bannerContent.');
  }

  // Toda la lógica de clonación anterior ha sido eliminada para esta prueba.

  console.log('main.js para banner ejecutado - FIN');
});