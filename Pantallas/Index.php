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
        
        <input type="submit" class="btn-2" value="Registrate" onclick="location.href='./Registro.php'">
        
        <p id="error-message" style="color: red;"></p>
   
    </form>
    <!-- Cargar Firebase de forma modular -->
    <script type="module" src="https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"></script>
    <script type="module" src="https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"></script>

    <!-- Enlace al archivo JavaScript externo como módulo -->
    <script type="module" src="../JavaScript/login.js"></script>
</body>
</html>