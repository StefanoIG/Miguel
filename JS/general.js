function recuperarPassword() {
    Swal.fire({
        title: 'Recuperar Contraseña',
        html: '<input type="email" id="swal-input1" class="swal2-input" placeholder="Ingresa tu correo electrónico" required>',
        showCancelButton: true,
        confirmButtonText: 'Recuperar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
        preConfirm: () => {
            const correo = document.getElementById('swal-input1').value;

            if (!correo) {
                Swal.showValidationMessage('Por favor, ingresa tu correo electrónico.');
            } else {
                // Aquí iría la lógica para enviar la solicitud de recuperación de contraseña
                // Podrías hacer una solicitud AJAX o fetch a tu backend para recuperar la contraseña
                // Simulación de la solicitud (remueve esta línea en tu código real)
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 2000); // Simular una espera de 2 segundos
                });
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '¡Correo enviado!',
                'Se ha enviado un correo electrónico con instrucciones para recuperar tu contraseña.',
                'success'
            );
        }
    });
}


// Función para validar una dirección de correo electrónico
function validarEmail() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailInput = document.getElementById("registroEmailInput");
    const resultadoEmail = document.getElementById("resultadoEmail");
    
    if (!emailRegex.test(emailInput.value)) {
        resultadoEmail.textContent = "La dirección de correo electrónico no es válida.";
        return false;
    }
    
    resultadoEmail.textContent = "";
    return true;
  }
  
  // Función para validar un número de teléfono
  function validarTelefono() {
    const phoneRegex = /^\d{10}$/; // Se asume que el número debe contener exactamente 10 dígitos
    const telefonoInput = document.getElementById("telefono");
    const resultadoTelefono = document.getElementById("resultadoTelefono");
    
    if (!phoneRegex.test(telefonoInput.value.replace(/\D/g, ''))) {
        resultadoTelefono.textContent = "El número de teléfono no es válido. Debe contener 10 dígitos.";
        return false;
    }
    
    return true;
  }
  
  // Función para validar contraseñas
  function validarContrasena() {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
    const contrasenaInput = document.getElementById("contrasena");
    const resultadoContrasena = document.getElementById("resultadoContrasena");
  
    if (!passwordRegex.test(contrasenaInput.value)) {
        resultadoContrasena.textContent = "La contraseña no es válida. Debe contener al menos un carácter en mayúscula, al menos un dígito y tener al menos 10 caracteres.";
        return false;
    }
    resultadoContrasena.textContent = "";
    return true;
  }
  
  // Función para verificar que las contraseñas coincidan
  function verificarContrasenas() {
    const contrasenaInput = document.getElementById("contrasena").value;
    const confirmarContrasenaInput = document.getElementById("confirmarContrasena").value;
    const mensajeContrasenas = document.getElementById("mensajeContrasenas");
  
    if (contrasenaInput !== confirmarContrasenaInput) {
        mensajeContrasenas.textContent = "Las contraseñas no coinciden.";
        return false;
    } else {
        mensajeContrasenas.textContent = "";
        return true;
    }
  }
  


  const formRegistro = document.querySelector('.register form');

  formRegistro.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que se envíe el formulario automáticamente
      
      if (!validarCamposVacios()) {
          event.stopPropagation(); // Detiene la propagación del evento si los campos están vacíos
  
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Por favor, completa todos los campos.',
          });
      } else {
          console.log('El formulario se enviará');
          this.submit(); // Envía el formulario actual si no hay campos vacíos
      }
  });

  
  function validarCamposVacios() {
      const campos = document.querySelectorAll('.form input, .form textarea'); // Selecciona campos de entrada y textarea
      
      for (const campo of campos) {
          if (campo.value.trim() === '') {
              return false; // Si algún campo está vacío, retorna false
          }
      }
      
      return true; // Si no hay campos vacíos, retorna true
  }
  
  
