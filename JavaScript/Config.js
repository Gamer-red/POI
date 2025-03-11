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