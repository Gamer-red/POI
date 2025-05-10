<<<<<<< HEAD

import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { auth } from "../JavaScript/firebase-config.js";  // Importamos la configuración desde firebase-config

// Función para iniciar sesión
function login() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario autenticado:", user);
            window.location.href = "../Pantallas/Pantalla_principal.php"; // Redirigir al chat
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            document.getElementById('error-message').innerText = "Error de autenticación: " + errorMessage;
        });
}

// Verificar el estado de autenticación
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Usuario autenticado:", user);
        window.location.href = "../Pantallas/Pantalla_principal.php"; // Redirigir al chat
    }
});

// Validación del formulario
function validateForm() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Por favor, ingresa un correo y una contraseña.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            login();
        }
    });
=======

import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { auth } from "../JavaScript/firebase-config.js";  // Importamos la configuración desde firebase-config

// Función para iniciar sesión
function login() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario autenticado:", user);
            window.location.href = "../Pantallas/Pantalla_principal.php"; // Redirigir al chat
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            document.getElementById('error-message').innerText = "Error de autenticación: " + errorMessage;
        });
}

// Verificar el estado de autenticación
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Usuario autenticado:", user);
        window.location.href = "../Pantallas/Pantalla_principal.php"; // Redirigir al chat
    }
});

// Validación del formulario
function validateForm() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        alert("Por favor, ingresa un correo y una contraseña.");
        return false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            login();
        }
    });
>>>>>>> c906c92b16ea7ecb1d8ef3047e7fb1374388178a
});