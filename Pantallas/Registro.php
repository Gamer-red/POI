<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Estilos/style_Registro.css">
    <title>Registro</title>
</head>
<body>
    <form id="Registro-form">
        <h2>Registro</h2>
        
        <label for="username">Nombre de usuario</label>
        <input type="text" class="Regis" id="username" autocomplete="off" placeholder="Ingrese su nombre de usuario">

        <label for="password">Password</label>
        <input type="password" class="Regis" id="password" autocomplete="off" placeholder="Ingrese una contraseña"> 

        <label for="confirm-password">Confirmar contraseña</label>
        <input type="password" class="Regis" id="confirm-password" autocomplete="off" placeholder="Ingrese otra vez la contraseña">

        <label for="email">Correo</label>
        <input type="email" class="Regis" id="email" autocomplete="off" placeholder="Ingrese el correo electrónico">

        <label for="foto">Seleccionar foto de perfil</label>
        <input type="file" class="foto" id="foto" name="foto" accept="image/*">
        
        <div id="image-preview-container">
            <img id="preview" src="" alt="Vista previa de la imagen">
        </div>

        <button type="submit">Registrarse</button>
    </form>
    <script src="../JavaScript/Registro.js"></script>
</body>
</html>