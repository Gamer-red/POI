import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCfh2PeiRGcEFNC6UGg3uG5dYWhBZk_zMU",
    authDomain: "chat-poi-b1864.firebaseapp.com",
    projectId: "chat-poi-b1864",
    storageBucket: "chat-poi-b1864.appspot.com",
    messagingSenderId: "363507859768",
    appId: "1:363507859768:web:64034907bd262648be41cd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Exporta todo lo necesario
export { firebaseConfig, app, db, auth, storage };