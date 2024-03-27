document.getElementById("formularioInicioSesion").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    // Aquí iría el código para verificar el inicio de sesión
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    if (usuario === "usuario" && contrasena === "contraseña") {
        // Simulamos un inicio de sesión exitoso
        document.getElementById("inicioSesion").style.display = "none";
        document.getElementById("sesionIniciada").style.display = "block";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

function cerrarSesion() {
    // Aquí iría el código para cerrar la sesión
    alert("Sesión cerrada correctamente.");
    document.getElementById("inicioSesion").style.display = "block";
    document.getElementById("sesionIniciada").style.display = "none";
}

function aceptar() {
    // Aquí iría el código para aceptar la acción
    alert("Acción aceptada.");
}

function cancelar() {
    // Aquí iría el código para cancelar la acción
    alert("Acción cancelada.");
}