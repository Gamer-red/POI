<<<<<<< HEAD
import { db, auth } from './firebase-config.js';
import { doc, onSnapshot, updateDoc, arrayUnion, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

// Variables globales para los usuarios
let senderId; // ID del usuario autenticado
let receiverId = 'user2'; // Cambia si es necesario

// Obtener el usuario autenticado
auth.onAuthStateChanged((user) => {
    if (user) {
        senderId = user.uid; // Asignar el ID del usuario autenticado
        console.log("Usuario autenticado:", user);
    } else {
        console.log("No hay usuario autenticado.");
    }
});

// Función para enviar un mensaje a Firestore
async function sendMessageToFirestore(message) {
    const chatDocRef = doc(db, 'chat', 'remitente_destinatario_fechaHora');

    try {
        // Primero, actualizamos el documento con el nuevo mensaje
        await updateDoc(chatDocRef, {
            messages: arrayUnion({
                senderId: senderId,
                receiverId: receiverId,
                message: message,
                // No usar serverTimestamp() aquí
            }),
            lastMessage: message, // Guardar el último mensaje
            lastTimestamp: serverTimestamp() // Timestamp del último mensaje
        });
        displayMessage(message, 'Yo'); // Actualiza la UI
    } catch (e) {
        console.error("Error al enviar el mensaje: ", e);
    }
}

// Función para mostrar el mensaje en la interfaz
function displayMessage(message, sender) {
    const msgElement = document.createElement('div');
    msgElement.className = sender === 'Yo' ? 'flex mb-4 flex-row-reverse' : 'flex mb-4';
    msgElement.innerHTML = `
        <div class="${sender === 'Yo' ? 'bg-blue-500' : 'bg-black'} text-white p-4 rounded-lg shadow-sm">
            <p class="text-sm font-semibold">${sender}</p>
            <small class="leading-relaxed">${message}</small>
        </div>
    `;
    document.getElementById('chat-container').appendChild(msgElement);
    document.getElementById('chat-container').scrollTop = document.getElementById('chat-container').scrollHeight; // Desplazar hacia abajo
}

// Escuchar cambios en el documento de chat
const chatDocRef = doc(db, 'chat', 'remitente_destinatario_fechaHora');

onSnapshot(chatDocRef, (doc) => {
    const data = doc.data();
    console.log("Datos del documento:", data); // Verificar los datos obtenidos
    if (data && data.messages) {
        // Limpiar mensajes anteriores para evitar duplicados
        document.getElementById('chat-container').innerHTML = '';

        // Mostrar todos los mensajes
        data.messages.forEach((msg) => {
            // No se requiere filtrar aquí, ya que mostramos todos
            const senderName = msg.senderId === senderId ? 'Yo' : 'Alan'; // Cambia 'Juana' si es necesario
            displayMessage(msg.message, senderName);
        });
    } else {
        console.log("No hay mensajes disponibles.");
    }
});

// Manejar el envío de mensajes cuando se presiona el botón
document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message) {
        sendMessageToFirestore(message);
        messageInput.value = ''; // Limpiar el campo de entrada
    }
});

// Envío de mensajes al presionar "Enter"
document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('send-button').click(); // Simular clic en el botón de enviar
    }
=======
import { db, auth } from './firebase-config.js';
import { doc, onSnapshot, updateDoc, arrayUnion, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

// Variables globales para los usuarios
let senderId; // ID del usuario autenticado
let receiverId = 'user2'; // Cambia si es necesario

// Obtener el usuario autenticado
auth.onAuthStateChanged((user) => {
    if (user) {
        senderId = user.uid; // Asignar el ID del usuario autenticado
        console.log("Usuario autenticado:", user);
    } else {
        console.log("No hay usuario autenticado.");
    }
});

// Función para enviar un mensaje a Firestore
async function sendMessageToFirestore(message) {
    const chatDocRef = doc(db, 'chat', 'remitente_destinatario_fechaHora');

    try {
        // Primero, actualizamos el documento con el nuevo mensaje
        await updateDoc(chatDocRef, {
            messages: arrayUnion({
                senderId: senderId,
                receiverId: receiverId,
                message: message,
                // No usar serverTimestamp() aquí
            }),
            lastMessage: message, // Guardar el último mensaje
            lastTimestamp: serverTimestamp() // Timestamp del último mensaje
        });
        displayMessage(message, 'Yo'); // Actualiza la UI
    } catch (e) {
        console.error("Error al enviar el mensaje: ", e);
    }
}

// Función para mostrar el mensaje en la interfaz
function displayMessage(message, sender) {
    const msgElement = document.createElement('div');
    msgElement.className = sender === 'Yo' ? 'flex mb-4 flex-row-reverse' : 'flex mb-4';
    msgElement.innerHTML = `
        <div class="${sender === 'Yo' ? 'bg-blue-500' : 'bg-black'} text-white p-4 rounded-lg shadow-sm">
            <p class="text-sm font-semibold">${sender}</p>
            <small class="leading-relaxed">${message}</small>
        </div>
    `;
    document.getElementById('chat-container').appendChild(msgElement);
    document.getElementById('chat-container').scrollTop = document.getElementById('chat-container').scrollHeight; // Desplazar hacia abajo
}

// Escuchar cambios en el documento de chat
const chatDocRef = doc(db, 'chat', 'remitente_destinatario_fechaHora');

onSnapshot(chatDocRef, (doc) => {
    const data = doc.data();
    console.log("Datos del documento:", data); // Verificar los datos obtenidos
    if (data && data.messages) {
        // Limpiar mensajes anteriores para evitar duplicados
        document.getElementById('chat-container').innerHTML = '';

        // Mostrar todos los mensajes
        data.messages.forEach((msg) => {
            // No se requiere filtrar aquí, ya que mostramos todos
            const senderName = msg.senderId === senderId ? 'Yo' : 'Alan'; // Cambia 'Juana' si es necesario
            displayMessage(msg.message, senderName);
        });
    } else {
        console.log("No hay mensajes disponibles.");
    }
});

// Manejar el envío de mensajes cuando se presiona el botón
document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message) {
        sendMessageToFirestore(message);
        messageInput.value = ''; // Limpiar el campo de entrada
    }
});

// Envío de mensajes al presionar "Enter"
document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('send-button').click(); // Simular clic en el botón de enviar
    }
>>>>>>> c906c92b16ea7ecb1d8ef3047e7fb1374388178a
});