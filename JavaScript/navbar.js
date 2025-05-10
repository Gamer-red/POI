<<<<<<< HEAD
import { auth, db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// Botón de cerrar sesión
const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', (e) => {
    e.preventDefault();

    signOut(auth)
        .then(() => {
            console.log('Sesión cerrada correctamente');
            window.location.href = '../Pantallas/index.php';
        })
        .catch((error) => {
            console.error('Error al cerrar sesión:', error);
        });
});

// Mostrar nombre del usuario actual
onAuthStateChanged(auth, (user) => {
    const userNameElement = document.getElementById('user-name');
    const userPhotoElement = document.getElementById('user-photo');

    if (user) {
        if (user.displayName) {
            userNameElement.textContent = user.displayName;
        } else {
            userNameElement.textContent = user.email; // Si no tiene nombre, mostramos su correo
        }

        if (user.photoURL) {
            userPhotoElement.src = user.photoURL;
        }
    } else {
        userNameElement.textContent = 'No conectado';
        userPhotoElement.src = '../Imagenes/PerfilEjemplo.png';
    }
});

// Mostrar/Ocultar el chat lateral
const chatIcon = document.getElementById('chat-icon');
const chatSidebar = document.getElementById('chat-sidebar');
const closeChatButton = document.getElementById('close-chat');

chatIcon.addEventListener('click', () => {
    chatSidebar.classList.toggle('hidden');
});

closeChatButton.addEventListener('click', () => {
    chatSidebar.classList.add('hidden');
});

// Cargar usuarios (amigos) en el chat lateral
async function cargarUsuarios() {
    const chatUsers = document.getElementById('chat-users');
    chatUsers.innerHTML = ''; // Limpiar primero

    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            const userData = doc.data();

            if (userData.username) {
                const userDiv = document.createElement('div');
                userDiv.classList.add('chat-user');
                userDiv.textContent = userData.username;
                chatUsers.appendChild(userDiv);
            }
        });
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

// Cargar usuarios al cargar la página
cargarUsuarios();
=======
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
>>>>>>> c906c92b16ea7ecb1d8ef3047e7fb1374388178a
