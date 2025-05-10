<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const inputTarea = document.getElementById('nueva-tarea-input');
    const btnAgregar = document.getElementById('agregar-tarea-btn');
    const listaTareas = document.getElementById('lista-tareas');
    const contadorTareas = document.getElementById('contador-tareas');

    function actualizarContador() {
        const tareas = listaTareas.querySelectorAll('li');
        let completadas = 0;
        let noCompletadas = 0;

        tareas.forEach(tarea => {
            if (tarea.classList.contains('tarea-completada')) {
                completadas++;
            } else {
                noCompletadas++;
            }
        });

        contadorTareas.textContent = `Total: ${tareas.length} | Completadas: ${completadas} | No Completadas: ${noCompletadas}`;
    }

    function crearTarea(texto) {
        const li = document.createElement('li');
        li.className = 'tarea-item';

        const span = document.createElement('span');
        span.textContent = texto;
        span.className = 'tarea-texto';

        // Grupo de botones editar y eliminar
        const grupoEditarEliminar = document.createElement('div');
        grupoEditarEliminar.className = 'grupo-editar-eliminar';

        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.className = 'editar-btn';

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'eliminar-btn';

        grupoEditarEliminar.appendChild(btnEditar);
        grupoEditarEliminar.appendChild(btnEliminar);

        // Grupo de botones completada y no completada
        const grupoCompletado = document.createElement('div');
        grupoCompletado.className = 'grupo-completado';

        const btnCompletada = document.createElement('button');
        btnCompletada.textContent = 'Completada';
        btnCompletada.className = 'completada-btn';

        const btnNoCompletada = document.createElement('button');
        btnNoCompletada.textContent = 'No Completada';
        btnNoCompletada.className = 'no-completada-btn';

        grupoCompletado.appendChild(btnCompletada);
        grupoCompletado.appendChild(btnNoCompletada);

        li.appendChild(span);
        li.appendChild(grupoEditarEliminar);
        li.appendChild(grupoCompletado);

        listaTareas.appendChild(li);

        actualizarContador();

        // Eventos de los botones
        btnEditar.addEventListener('click', function() {
            const nuevoTexto = prompt('Editar tarea:', span.textContent);
            if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
                span.textContent = nuevoTexto;
            }
        });

        btnEliminar.addEventListener('click', function() {
            if (confirm('¿Estás seguro de eliminar esta tarea?')) {
                li.remove();
                actualizarContador();
            }
        });

        btnCompletada.addEventListener('click', function() {
            li.classList.add('tarea-completada');
            li.classList.remove('tarea-no-completada');
            actualizarContador();
        });

        btnNoCompletada.addEventListener('click', function() {
            li.classList.add('tarea-no-completada');
            li.classList.remove('tarea-completada');
            actualizarContador();
        });
    }

    // Evento para agregar una nueva tarea
    btnAgregar.addEventListener('click', function() {
        const texto = inputTarea.value.trim();
        if (texto !== '') {
            crearTarea(texto);
            inputTarea.value = '';
        }
    });

    // Permitir agregar tarea al presionar Enter
    inputTarea.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            btnAgregar.click();
        }
    });
});
=======
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
>>>>>>> c906c92b16ea7ecb1d8ef3047e7fb1374388178a
