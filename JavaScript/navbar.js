import { auth } from './firebase-config.js'; // Asegúrate de que el path sea correcto

// Seleccionar el botón de "Salir"
const logoutButton = document.getElementById('logout-button');

// Manejar el evento de clic para cerrar sesión
logoutButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir la acción por defecto del enlace

    // Cerrar sesión en Firebase
    auth.signOut().then(() => {
        console.log('Sesión cerrada correctamente');
        // Redirigir a la página de inicio de sesión
        window.location.href = '../Pantallas/index.php';
    }).catch((error) => {
        console.error('Error al cerrar sesión: ', error);
    });
});