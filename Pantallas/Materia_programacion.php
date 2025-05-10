<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Estilos/style_NavBar.css">
    <link rel="stylesheet" href="../Estilos/style_MteriaProgramacion.css">
    <title>Materia de Programación - Avisos</title>
</head>
<body>
<?php include("../Cabecera/Navbar.php"); ?>

    <h1>Programacion basica</h1>

    <div class="container">
        <!-- Sección para enviar un nuevo aviso -->
        <div class="nuevo-aviso-section">
            <h2>Enviar un nuevo aviso</h2>
            <form>
                <input type="text" placeholder="Título del aviso" >
                <textarea rows="4" placeholder="Escribe tu aviso aquí..." ></textarea>
                <button type="button" disabled>Enviar Aviso</button>
            </form>
        </div>

        <!-- Sección donde se muestran los avisos -->
        <div class="avisos-section">
            <h2>Lista de Avisos</h2>
            <ul class="avisos-list">
                <li class="aviso-item">
                    
                </li>
                <li class="aviso-item">
                    
                </li>
            </ul>
        </div>
    </div>
</body>
</html>