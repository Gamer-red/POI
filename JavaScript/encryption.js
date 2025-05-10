<<<<<<< HEAD
const secretKey = "miClaveSecreta";

// Función para encriptar datos
function encryptData(data) {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
}

// Función para desencriptar datos
function decryptData(encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Ejemplo de uso
const originalData = "Este es un mensaje secreto.";
const encryptedData = encryptData(originalData);
console.log("Datos encriptados:", encryptedData);

const decryptedData = decryptData(encryptedData);
=======
const secretKey = "miClaveSecreta";

// Función para encriptar datos
function encryptData(data) {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
}

// Función para desencriptar datos
function decryptData(encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Ejemplo de uso
const originalData = "Este es un mensaje secreto.";
const encryptedData = encryptData(originalData);
console.log("Datos encriptados:", encryptedData);

const decryptedData = decryptData(encryptedData);
>>>>>>> c906c92b16ea7ecb1d8ef3047e7fb1374388178a
console.log("Datos desencriptados:", decryptedData);