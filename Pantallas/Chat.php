<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <title>Chat 1 a 1</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
        }
    </style>
</head>
<body>
    <section class="h-screen flex flex-col">
        <!-- Encabezado del chat -->
        <div id="chat-header" class="bg-white px-4 py-6 border-b flex items-center justify-between">
            <div class="flex items-center">
                <div class="relative w-10">
                    <img src="../Fotos-Perfiles/Perfil 2.jpg" class="rounded-full w-10 h-10">
                    <div class="absolute bg-green-300 p-1 rounded-full bottom-0 right-0 border-gray-800 border-2"></div>
                </div>
                <div class="flex flex-col ml-4">
                    <p class="text-lg font-semibold">Alehandro</p>
                    <small class="text-gray-500">En Línea</small>
                </div>
            </div>
            <!-- Ícono de videollamada -->
            <button id="video-call-button" class="focus:outline-none">
            <a href="../Pantallas/videollamada.php">
                <img src="ruta_del_icono.png" alt="Videollamada">
            </a>
            </button>
        </div>

        <!-- Contenedor del chat con scroll -->
        <div id="chat-container" class="py-6 px-4 flex-1 overflow-y-auto">
            <!-- Los mensajes se insertarán aquí dinámicamente -->
        </div>

        <!-- Campo para enviar mensajes -->
        <div id="chat" class="py-4 px-4 flex border-t">
            <input id="message-input" type="text" class="px-4 py-2 bg-gray-100 w-full rounded-lg" placeholder="Escribe tu mensaje...">
            <button id="send-button" class="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2">Enviar</button>
        </div>
    </section>
    <script type="module" src="../JavaScript/chat.js"></script>
</body>
</html>