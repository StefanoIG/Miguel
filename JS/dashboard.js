function goHome() {
    window.location.href = 'dashboard.html';
}

function goUsers() {
    window.location.href = 'usuarios.html';
}

function goModule() {
    window.location.href = 'add_modu.html';
}

function goEdit() {
    window.location.href = 'edit_modu.html';
}


document.querySelectorAll('.fa-edit').forEach(function(editIcon) {
    editIcon.addEventListener('click', function() {
        // Suponemos que aquí se obtienen los datos del usuario de alguna fuente
        const userData = {
            id: 1,
            username: 'JohnDoe',
            email: 'john@example.com',
            plan: 'Premium',
            role: 'User',
            level: 'Intermediate'
        };

        // Muestra la alerta para editar los datos del usuario
        Swal.fire({
            title: 'Edit User',
            html: `
                <div class="form-group">
                    <input type="text" id="swal-input1" class="form-input" placeholder="Username" value="${userData.username}">
                    <input type="email" id="swal-input2" class="form-input" placeholder="Email" value="${userData.email}">
                    <select id="swal-input3" class="form-select">
                        <option value="Basic" ${userData.plan === 'Basic' ? 'selected' : ''}>Basic</option>
                        <option value="Premium" ${userData.plan === 'Premium' ? 'selected' : ''}>Premium</option>
                        <option value="Pro" ${userData.plan === 'Pro' ? 'selected' : ''}>Pro</option>
                    </select>
                    <select id="swal-input4" class="form-select">
                        <option value="User" ${userData.role === 'User' ? 'selected' : ''}>User</option>
                        <option value="Admin" ${userData.role === 'Admin' ? 'selected' : ''}>Admin</option>
                    </select>
                    <select id="swal-input5" class="form-select">
                        <option value="Beginner" ${userData.level === 'Beginner' ? 'selected' : ''}>Beginner</option>
                        <option value="Intermediate" ${userData.level === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
                        <option value="Advanced" ${userData.level === 'Advanced' ? 'selected' : ''}>Advanced</option>
                    </select>
                </div>
            `,
            showCancelButton: true, // Muestra el botón de cancelar
            confirmButtonText: 'Edit', // Texto del botón de confirmar
            cancelButtonText: 'Cancel', // Texto del botón de cancelar
            focusConfirm: false,
            preConfirm: () => {
                // Aquí se recogen los valores de los campos de entrada
                const username = document.getElementById('swal-input1').value;
                const email = document.getElementById('swal-input2').value;
                const plan = document.getElementById('swal-input3').value;
                const role = document.getElementById('swal-input4').value;
                const level = document.getElementById('swal-input5').value;

                // Aquí se puede añadir la lógica para validar los datos
                // Y luego la lógica para enviar los datos al servidor
                
                // Simulamos una petición al servidor con setTimeout
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            username: username,
                            email: email,
                            plan: plan,
                            role: role,
                            level: level
                        });
                    }, 2000); // Simula un tiempo de espera de respuesta del servidor
                });
            }
        }).then((result) => {
            // Si el resultado es exitoso y no se canceló la edición
            if (result.isConfirmed && result.value) {
                // Muestra una alerta de éxito
                Swal.fire({
                    title: 'Edited!',
                    text: `User ${result.value.username} has been updated.`,
                    icon: 'success',
                    position: 'top-end',
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                });
            }
        });
    });


    document.querySelectorAll('.fa-trash-alt').forEach(function(deleteIcon) {
        deleteIcon.addEventListener('click', function() {
            // Aquí deberías obtener el ID del usuario que quieres eliminar
            // Para este ejemplo, simplemente usaremos un ID de placeholder
            const userId = 1;

            // Muestra una alerta para confirmar la eliminación
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Aquí deberías procesar la eliminación del usuario
                    console.log('User Deleted:', userId);
                    Swal.fire(
                        'Deleted!',
                        'The user has been deleted.',
                        'success'
                        
                        
                    );
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Añadir evento click a todos los botones de edición
    document.querySelectorAll('.edit-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            // Obtener el ID del módulo desde el atributo data-id
            var moduleId = this.getAttribute('data-id');
            // Redirigir a la página de detalles de edición del módulo
            window.location.href = 'edit_modu_details.html?id=' + moduleId;
        });
    });
});
