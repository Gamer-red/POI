<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Estilos/style_Registro.css">
    <title>Registro</title>
</head>
<body>
    <form id="Registro-form">
        <h2>Registro</h2>
        
        <label for="username">Nombre de usuario</label>

        <input type="text" class="Regis" id="username" autocomplete="off" placeholder="Ingrese su nombre de usuario" required>

        <label for="password">Password</label>
        <input type="password" class="Regis" id="password" autocomplete="off" placeholder="Ingrese una contraseña" required minlength="6">

        <label for="confirm-password">Confirmar contraseña</label>
        <input type="password" class="Regis" id="confirm-password" autocomplete="off" placeholder="Ingrese otra vez la contraseña" required>

        <label for="email">Correo</label>
        <input type="email" class="Regis" id="email" autocomplete="off" placeholder="Ingrese el correo electrónico" required>

        <input type="text" class="Regis" id="username" autocomplete="off" placeholder="Ingrese su nombre de usuario">

        <label for="password">Password</label>
        <input type="password" class="Regis" id="password" autocomplete="off" placeholder="Ingrese una contraseña"> 

        <label for="confirm-password">Confirmar contraseña</label>
        <input type="password" class="Regis" id="confirm-password" autocomplete="off" placeholder="Ingrese otra vez la contraseña">

        <label for="email">Correo</label>
        <input type="email" class="Regis" id="email" autocomplete="off" placeholder="Ingrese el correo electrónico">


        <label for="foto">Seleccionar foto de perfil</label>
        <input type="file" class="foto" id="foto" name="foto" accept="image/*">
        
        <div id="image-preview-container">
            <img id="preview" src="" alt="Vista previa de la imagen">
        </div>

        <button type="submit">Registrarse</button>

        <p id="error-message" style="color: red;"></p>
        <p id="success-message" style="color: green;"></p>
    </form>

    <!-- Firebase SDKs -->
    <script type="module">
        // Importar los módulos necesarios de Firebase
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
        import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";
        import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
        
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
        const auth = getAuth(app);
        const db = getFirestore(app);
        const storage = getStorage(app);
        
        // Elementos del DOM
        const registroForm = document.getElementById('Registro-form');
        const errorMessage = document.getElementById('error-message');
        const successMessage = document.getElementById('success-message');
        const fotoInput = document.getElementById('foto');
        const preview = document.getElementById('preview');
        
        // Vista previa de la imagen
        fotoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    preview.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
        
        // Manejar el envío del formulario
        registroForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Mostrar estado de carga
            const submitButton = registroForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = "Registrando...";
            errorMessage.textContent = "";
            successMessage.textContent = "";
            
            // Obtener valores del formulario
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const foto = fotoInput.files[0];
            
            // Validaciones
            if (password !== confirmPassword) {
                errorMessage.textContent = "Las contraseñas no coinciden";
                submitButton.disabled = false;
                submitButton.textContent = "Registrarse";
                return;
            }
            
            if (password.length < 6) {
                errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres";
                submitButton.disabled = false;
                submitButton.textContent = "Registrarse";
                return;
            }
            
            try {
                // 1. Crear usuario en Firebase Auth
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log("Usuario creado con UID:", user.uid);
                
                // 2. Subir foto de perfil si existe
                let photoURL = '';
                if (foto) {
                    try {
                        // Esperar un momento para asegurar la autenticación
                        await new Promise(resolve => setTimeout(resolve, 500));
                        
                        // Crear referencia única para el archivo
                        const timestamp = Date.now();
                        const fileExtension = foto.name.split('.').pop();
                        const fileName = `profile_${timestamp}.${fileExtension}`;
                        const storageRef = ref(storage, `profile_pictures/${user.uid}/${fileName}`);
                        
                        console.log("Subiendo imagen a:", storageRef.fullPath);
                        
                        // Subir el archivo con metadatos
                        const uploadTask = await uploadBytes(storageRef, foto, {
                            contentType: foto.type,
                            customMetadata: {
                                uploadedBy: user.uid,
                                originalName: foto.name
                            }
                        });
                        
                        // Obtener URL de descarga
                        photoURL = await getDownloadURL(uploadTask.ref);
                        console.log("Imagen subida correctamente. URL:", photoURL);
                    } catch (storageError) {
                        console.error("Error al subir imagen:", storageError);
                        errorMessage.textContent = "Registro exitoso, pero no se pudo subir la foto de perfil";
                    }
                }
                
                // 3. Guardar información adicional en Firestore
                await setDoc(doc(db, "users", user.uid), {
                    username: username,
                    email: email,
                    photoURL: photoURL || null,
                    createdAt: new Date().toISOString(),
                    lastLogin: new Date().toISOString()
                });
                
                // 4. Mostrar mensaje de éxito y redirigir
                successMessage.textContent = "¡Registro exitoso! Redirigiendo...";
                setTimeout(() => {
                    window.location.href = "Pantalla_principal.php";
                }, 1500);
                
            } catch (error) {
                console.error("Error completo:", error);
                submitButton.disabled = false;
                submitButton.textContent = "Registrarse";
                
                let errorMsg = "Error al registrar el usuario";
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        errorMsg = "El correo electrónico ya está en uso";
                        break;
                    case 'auth/invalid-email':
                        errorMsg = "El correo electrónico no es válido";
                        break;
                    case 'auth/weak-password':
                        errorMsg = "La contraseña es demasiado débil";
                        break;
                    case 'storage/unauthorized':
                        errorMsg = "No se pudo subir la foto por problemas de permisos";
                        break;
                    default:
                        errorMsg = error.message || errorMsg;
                }
                
                errorMessage.textContent = errorMsg;
            }
        });
    </script>

    </form>
    <script src="../JavaScript/Registro.js"></script>
</body>
</html>