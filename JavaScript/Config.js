<<<<<<< HEAD
function toggleEncryption(checkbox) {
    const statusText = document.getElementById('status-text');
    
    if (checkbox.checked) {
        statusText.innerHTML = 'La encriptación está <strong>activada</strong>.';
        // Aquí puedes agregar la lógica para habilitar la encriptación
    } else {
        statusText.innerHTML = 'La encriptación está <strong>desactivada</strong>.';
        // Aquí puedes agregar la lógica para deshabilitar la encriptación
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const encryptionCheckbox = document.getElementById("encryption");
    const statusText = document.getElementById("status-text");

    encryptionCheckbox.addEventListener("change", function () {
        if (encryptionCheckbox.checked) {
            statusText.innerHTML = "La encriptación está <strong>activada</strong>.";
        } else {
            statusText.innerHTML = "La encriptación está <strong>desactivada</strong>.";
        }
    });
});
=======
function toggleEncryption(checkbox) {
    const statusText = document.getElementById('status-text');
    
    if (checkbox.checked) {
        statusText.innerHTML = 'La encriptación está <strong>activada</strong>.';
        // Aquí puedes agregar la lógica para habilitar la encriptación
    } else {
        statusText.innerHTML = 'La encriptación está <strong>desactivada</strong>.';
        // Aquí puedes agregar la lógica para deshabilitar la encriptación
    }
}
>>>>>>> c906c92b16ea7ecb1d8ef3047e7fb1374388178a
