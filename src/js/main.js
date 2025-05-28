function goToSearch() {
  window.location.href = 'src/componentes/buscar.html';
}

function uploadImage() {
  alert('Función de búsqueda por imagen aún no implementada.');
}

document.addEventListener('DOMContentLoaded', () => {
  const bannerTrack = document.querySelector('.banner-track');
  const bannerContent = document.querySelector('.banner-content');
  let currentScrollX = 0;
  // To add speed controls, this variable can be updated dynamically.
  let animationSpeed = 1;

  function scrollBanner() {
    currentScrollX -= animationSpeed;
    bannerContent.style.transform = `translateX(${currentScrollX}px)`;

    // Reset scroll if banner has scrolled past half of its content
    if (bannerContent.scrollWidth > 0) { // Ensure scrollWidth is available
      const contentWidthHalf = bannerContent.scrollWidth / 2;
      if (Math.abs(currentScrollX) >= contentWidthHalf) {
        currentScrollX = 0;
        // No need to apply transform here, it will be applied in the next frame
        // or could be applied immediately if desired:
        // bannerContent.style.transform = `translateX(${currentScrollX}px)`;
      }
    }
  }

  function animationLoop() {
    scrollBanner();
    requestAnimationFrame(animationLoop);
  }

  
  // Start the animation loop
  animationLoop();
  // const uploadButton = document.getElementById('uploadImageBtn'); // Botón usa onclick directamente
  // if (uploadButton) {
    // uploadButton.addEventListener('click', uploadImage);
  // }
});