<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Estilos/style.css">
    <title>Inicio de sesión</title>
</head>
<body>
    <form id="login-form">
        <h2>Inicio de sesión</h2>

        <label for="username">Usuario</label>
        <input type="text" id="username" autocomplete="off" placeholder="Ingrese su correo electrónico">

        <label for="password">Password</label>
        <input type="password" id="password" autocomplete="off" placeholder="Ingrese su contraseña">

        <input type="submit" class="btn-1" value="Iniciar sesión">

        <input type="submit" class="btn-2" value="Registrate" onclick="location.href='Registro.php'">

        <p id="error-message" style="color: red;"></p>
    </form>
    <!-- Firebase SDKs -->
    <script type="module">
        // Importar los módulos de Firebase
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

        // Esta es la configuracion de la Base de Datos
        const firebaseConfig = {
            apiKey: "AIzaSyCfh2PeiRGcEFNC6UGg3uG5dYWhBZk_zMU",
            authDomain: "chat-poi-b1864.firebaseapp.com",
            projectId: "chat-poi-b1864",
            storageBucket: "chat-poi-b1864.appspot.com",
            messagingSenderId: "363507859768",
            appId: "1:363507859768:web:64034907bd262648be41cd"
        };

        // Inicializar Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        // Manejar el envío del formulario
        const loginForm = document.getElementById('login-form');
        const errorMessage = document.getElementById('error-message');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Autenticación con Firebase
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Usuario autenticado
                    window.location.href = "Pantalla_principal.php";
                })
                .catch((error) => {
                    // Mostrar error
                    errorMessage.textContent = "Correo o contraseña incorrectos";
                    console.error(error);
                });
        });
    </script>
</body>
</html>
