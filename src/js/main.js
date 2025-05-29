document.addEventListener('DOMContentLoaded', () => {
  const bannerTrack = document.querySelector('.banner-track');
  const bannerContent = document.getElementById('bannerContent');

  if (bannerTrack && bannerContent) {
    if (bannerTrack.children.length === 1 && bannerTrack.firstElementChild) {
      const clone = bannerContent.cloneNode(true);
      bannerTrack.appendChild(clone);
    }
  } else {
    console.error("Error: No se encontraron los elementos del banner.");
  }
});
