'use strict';

function iniciarSesion(event) {
  event.preventDefault(); // Prevenir el envío real del formulario
  alert('Intentando iniciar sesión...');
  // Aquí iría la lógica de autenticación real
  // Ya no es necesario 'return false;'
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', iniciarSesion);
  }
});