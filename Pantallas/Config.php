<<<<<<< HEAD
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configuración</title>
    <link rel="stylesheet" href="../Estilos/style_NavBar.css">
    <link rel="stylesheet" href="../Estilos/style_Config.css"> <!-- Ajusta la ruta a tu CSS -->
</head>
<body>

    <?php include("../Cabecera/Navbar.php"); ?>

    <main class="config-container">
        <h1>Configuración de Seguridad</h1>
        <div class="encryption-toggle">
            <label for="encryption">Activar Encriptación de Datos:</label>
            <input type="checkbox" id="encryption" name="encryption" onchange="toggleEncryption(this)">
        </div>
        <div class="encryption-status">
            <p id="status-text">La encriptación está <strong>desactivada</strong>.</p>
        </div>
    </main>
    <script src="../JavaScript/Config.js" type="module"></script> <!-- Ajusta la ruta a tu JavaScript -->
</body>
=======
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configuración</title>
   <style>
    body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}

.config-container {
    padding: 20px;
}

h1 {
    margin-bottom: 20px;
    color: rgb(101, 100, 99);
}

.encryption-toggle {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

label {
    margin-right: 10px;
}

.encryption-status {
    margin-top: 20px;
    font-size: 18px;
    color: rgb(50, 50, 50);
}
   </style>
   <link rel="stylesheet" href="../Estilos/style_NavBar.css">
</head>
<body>
    <?php include("../Cabecera/Navbar.php"); ?>

    <main class="config-container">
        <h1>Configuración de Seguridad</h1>
        <div class="encryption-toggle">
            <label for="encryption">Activar Encriptación de Datos:</label>
            <input type="checkbox" id="encryption" name="encryption" onchange="toggleEncryption(this)">
        </div>
        <div class="encryption-status">
            <p id="status-text">La encriptación está <strong>desactivada</strong>.</p>
        </div>
    </main>
    <script src="../JavaScript/Config.js" type="module"></script> <!-- Ajusta la ruta a tu JavaScript -->
</body>
>>>>>>> c906c92b16ea7ecb1d8ef3047e7fb1374388178a
</html>