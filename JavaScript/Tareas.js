document.addEventListener('DOMContentLoaded', function() {
    const agregarTareaBtn = document.getElementById('agregar-tarea-btn');
    const nuevaTareaInput = document.getElementById('nueva-tarea-input');
    const listaTareas = document.getElementById('lista-tareas');

    // Función para agregar una nueva tarea
    agregarTareaBtn.addEventListener('click', function() {
        const textoTarea = nuevaTareaInput.value.trim();

        if (textoTarea !== "") {
            // Crear un nuevo elemento de lista (li)
            const nuevaTarea = document.createElement('li');

            // Crear un checkbox para marcar la tarea como completada
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    nuevaTarea.style.textDecoration = 'line-through';
                    nuevaTarea.style.color = '#888';
                } else {
                    nuevaTarea.style.textDecoration = 'none';
                    nuevaTarea.style.color = '#000';
                }
            });

            // Crear un span para el texto de la tarea
            const spanTarea = document.createElement('span');
            spanTarea.textContent = textoTarea;

            // Agregar el checkbox y el texto al elemento de lista
            nuevaTarea.appendChild(checkbox);
            nuevaTarea.appendChild(spanTarea);

            // Agregar la nueva tarea a la lista
            listaTareas.appendChild(nuevaTarea);

            // Limpiar el campo de entrada
            nuevaTareaInput.value = '';
        } else {
            alert('Por favor, ingresa una tarea válida.');
        }
    });

    // Opcional: Permitir agregar tareas presionando "Enter"
    nuevaTareaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarTareaBtn.click();
        }
    });
});