'use strict';

function buscar() {
  const query = document.getElementById('searchField').value;
  alert('Buscando: ' + query);
  // Aquí iría la lógica de búsqueda real
}

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('searchBtn');
  if (searchButton) {
    searchButton.addEventListener('click', buscar);
  }
});