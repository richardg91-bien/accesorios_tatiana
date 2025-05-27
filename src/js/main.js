function goToSearch() {
  window.location.href = 'src/componentes/buscar.html';
}

function uploadImage() {
  alert('Función de búsqueda por imagen aún no implementada.');
}

document.addEventListener('DOMContentLoaded', () => {
  const uploadButton = document.getElementById('uploadImageBtn');
  if (uploadButton) {
    uploadButton.addEventListener('click', uploadImage);
  }
});