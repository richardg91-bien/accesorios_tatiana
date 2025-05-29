document.addEventListener('DOMContentLoaded', () => {
  const bannerTrack = document.getElementById('bannerTrack');
  const bannerContent = document.getElementById('bannerContent');

  // Duplicar contenido dinámicamente
  const clone = bannerContent.cloneNode(true);
  bannerTrack.appendChild(clone);

  let position = 0;
  const speed = 1;

  function animate() {
    position -= speed;
    if (Math.abs(position) >= bannerContent.offsetWidth) {
      position = 0;
    }

    bannerTrack.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
