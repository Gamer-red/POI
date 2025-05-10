<<<<<<< HEAD
/// 1. Definir las variables necesarias
const appId = "97cb4fb9d1cc40a69a7b4476a6803d60"; // Reemplaza con tu App ID de Agora
const token = null; // Para pruebas iniciales, puedes usar `null`
const channel = "demo"; // El nombre del canal para la videollamada
let client, localTracks, remoteUsers = {};

// 2. Iniciar la videollamada cuando se haga clic en el botón "Iniciar llamada"
document.getElementById("startCallButton").onclick = async function () {
    await startCall();
};

// 3. Función para empezar la llamada
async function startCall() {
    // Inicializar el cliente de Agora
    client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    // Unirse al canal
    await client.join(appId, channel, token, null);

    // Crear y publicar las pistas de audio y video locales
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
    localTracks[1].play("localVideo");  // Mostrar el video local
    await client.publish(localTracks);  // Publicar las pistas

    console.log("Publicando video y audio locales en el canal");

    // Escuchar usuarios remotos
    client.on("user-published", async (user, mediaType) => {
        // Suscribirse al usuario remoto
        await client.subscribe(user, mediaType);
        console.log("Usuario remoto publicado:", user.uid);

        if (mediaType === "video") {
            // Reproducir el video remoto en el contenedor adecuado
            const remoteVideoTrack = user.videoTrack;
            remoteVideoTrack.play("remoteVideo");
        }
    });

    client.on("user-unpublished", (user) => {
        console.log("Usuario remoto salió:", user.uid);
        document.getElementById("remoteVideo").srcObject = null; // Limpiar el contenedor
    });

    // Función para finalizar la llamada
    document.getElementById("endCallButton").onclick = async function () {
        endCall();
    };
}

// 4. Función para finalizar la llamada
async function endCall() {
    // Dejar el canal
    await client.leave();
    console.log("Llamada finalizada");

    // Detener los medios locales
    localTracks[0].stop();
    localTracks[1].stop();
    localTracks[0].close();
    localTracks[1].close();

    // Limpiar el contenedor de video remoto
    document.getElementById("remoteVideo").srcObject = null;
}
=======
/// 1. Definir las variables necesarias
const appId = "97cb4fb9d1cc40a69a7b4476a6803d60"; // Reemplaza con tu App ID de Agora
const token = null; // Para pruebas iniciales, puedes usar `null`
const channel = "demo"; // El nombre del canal para la videollamada
let client, localTracks, remoteUsers = {};

// 2. Iniciar la videollamada cuando se haga clic en el botón "Iniciar llamada"
document.getElementById("startCallButton").onclick = async function () {
    await startCall();
};

// 3. Función para empezar la llamada
async function startCall() {
    // Inicializar el cliente de Agora
    client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    // Unirse al canal
    await client.join(appId, channel, token, null);

    // Crear y publicar las pistas de audio y video locales
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
    localTracks[1].play("localVideo");  // Mostrar el video local
    await client.publish(localTracks);  // Publicar las pistas

    console.log("Publicando video y audio locales en el canal");

    // Escuchar usuarios remotos
    client.on("user-published", async (user, mediaType) => {
        // Suscribirse al usuario remoto
        await client.subscribe(user, mediaType);
        console.log("Usuario remoto publicado:", user.uid);

        if (mediaType === "video") {
            // Reproducir el video remoto en el contenedor adecuado
            const remoteVideoTrack = user.videoTrack;
            remoteVideoTrack.play("remoteVideo");
        }
    });

    client.on("user-unpublished", (user) => {
        console.log("Usuario remoto salió:", user.uid);
        document.getElementById("remoteVideo").srcObject = null; // Limpiar el contenedor
    });

    // Función para finalizar la llamada
    document.getElementById("endCallButton").onclick = async function () {
        endCall();
    };
}

// 4. Función para finalizar la llamada
async function endCall() {
    // Dejar el canal
    await client.leave();
    console.log("Llamada finalizada");

    // Detener los medios locales
    localTracks[0].stop();
    localTracks[1].stop();
    localTracks[0].close();
    localTracks[1].close();

    // Limpiar el contenedor de video remoto
    document.getElementById("remoteVideo").srcObject = null;
}
>>>>>>> c906c92b16ea7ecb1d8ef3047e7fb1374388178a
