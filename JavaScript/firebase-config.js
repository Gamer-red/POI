// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCfh2PeiRGcEFNC6UGg3uG5dYWhBZk_zMU",
    authDomain: "chat-poi-b1864.firebaseapp.com",
    projectId: "chat-poi-b1864",
    storageBucket: "chat-poi-b1864.appspot.com",
    messagingSenderId: "363507859768",
    appId: "1:363507859768:web:64034907bd262648be41cd"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar instancias de Firestore, Auth y Storage
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };