//banner del header, continuidad del span
document.addEventListener('DOMContentLoaded', () => {
  const bannerTrack = document.getElementById('bannerTrack');
  const bannerContent = document.getElementById('bannerContent');

  if (bannerTrack && bannerContent) {
    const clone = bannerContent.cloneNode(true);
    bannerTrack.appendChild(clone); // Pega el duplicado para que no haya salto
  }
});


let currentIndex = 0;
const images = document.querySelectorAll('.hero-carousel img');

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

images[0].classList.add('active');
setInterval(showNextImage, 3000);
