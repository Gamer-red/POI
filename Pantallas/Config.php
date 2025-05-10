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
</html>