<?php
// navbar.php
?>

<!-- Header y Navbar -->
<header>
  <div class="Logo">
    <img id="user-photo" src="../Imagenes/PerfilEjemplo.png" alt="Foto de usuario">
    <h2 id="user-name" class="nombre_empresa">Cargando...</h2>
  </div>

  <nav>
    <!-- Aquí puedes agregar más enlaces si los necesitas -->

  <div class="icons">
    <a href="../Pantallas/Pantalla_principal.php">
      <img src="../Imagenes/casa.png" alt="Inicio">
    </a>
    <a href="../Pantallas/Recompensas.php">
      <img src="../Imagenes/recompensa.png" alt="Recompensas">
    </a>
    <a href="../Pantallas/Tareas.php">
      <img src="../Imagenes/tareas.png" alt="Tareas">
    </a>
    <a href="#" id="chat-icon">
      <img src="../Imagenes/chat.png" alt="Chat">
    </a>
    <a href="../Pantallas/Config.php">
      <img src="../Imagenes/config.png" alt="Configuración">
    </a>
    <a href="#" id="logout-button">
      <img src="../Imagenes/salir.png" alt="Cerrar sesión">
    </a>
  </div>
  </nav>
</header>

<!-- Chat lateral -->
<div id="chat-sidebar" class="chat-sidebar hidden">
  <div class="chat-header">
    <h3>Chats</h3>
    <button id="close-chat">×</button>
  </div>
  <div id="chat-users" class="chat-users">
    <!-- Aquí se cargarán dinámicamente los amigos desde Firestore -->
  </div>
</div>

<!-- Scripts para funcionalidad del navbar -->
<script type="module" src="../JavaScript/navbar.js"></script>
