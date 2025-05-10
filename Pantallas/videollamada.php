<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Videollamada</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
        }
    </style>
</head>
<body>
    <section class="h-screen flex flex-col bg-gray-900 text-white">
        <!-- Encabezado de la videollamada -->
        <div class="bg-gray-800 p-4 flex justify-between items-center">
            <h2 class="text-lg font-semibold">Videollamada con Diego</h2>
            <button id="endCallButton" class="bg-red-500 text-white rounded-lg px-4 py-2">Finalizar llamada</button>
        </div>

        <!-- Contenedor de los videos -->
        <div id="videoContainer" class="flex-1 flex justify-center items-center space-x-4 p-4">
            <div class="w-1/2">
                <video id="localVideo" autoplay muted class="w-full h-auto rounded-lg bg-black"></video>
                <p class="text-center mt-2">Tú</p>
            </div>
            <div class="w-1/2">
                <video id="remoteVideo" autoplay class="w-full h-auto rounded-lg bg-black"></video>
                <p class="text-center mt-2">Diego</p>
            </div>
        </div>

        <!-- Botones de control de la videollamada -->
        <div class="p-4 flex justify-center space-x-4">
            <button id="startCallButton" class="bg-blue-500 text-white rounded-lg px-6 py-2">Iniciar llamada</button>
        </div>
    </section>

    <!-- Cargar el SDK de Agora -->
    <script src="../Agora/AgoraRTC_N-4.23.1.js"></script> <!-- Asegúrate de que la ruta sea correcta -->

    <!-- Script para la funcionalidad de la videollamada -->
    <script type="module" src="../JavaScript/Videollamada.js"></script>
</body>
</html>
