<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administración de Tareas</title>
    <link rel="stylesheet" href="../Estilos/style_Tareas.css">
    <link rel="stylesheet" href="../Estilos/style_NavBar.css">
</head>
<body>
    
    <?php include("../Cabecera/Navbar.php"); ?>

    <div class="tareas-container">
        <h2>Administración de Tareas</h2>
        
        <!-- Contador de tareas -->
        <div id="contador-tareas" class="contador-tareas">
            Total: 0 | Completadas: 0 | No Completadas: 0
        </div>

        <!-- Formulario para agregar nuevas tareas -->
        <div class="nueva-tarea">
            <input type="text" id="nueva-tarea-input" placeholder="Nueva tarea...">
            <button id="agregar-tarea-btn">Agregar Tarea</button>
        </div>

        <!-- Lista de tareas -->
        <ul id="lista-tareas" class="lista-tareas">
            <!-- Aquí se añadirán las tareas dinámicamente -->
        </ul>
    </div>

    <script src="../JavaScript/Tareas.js"></script>
</body>
</html>