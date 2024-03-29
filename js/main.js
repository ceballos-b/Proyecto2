function verificarEdad() {
    let intentos = 0;
    while (intentos < 3) {
        let anioNacimiento = prompt("Por favor, ingresa el año de tu nacimiento:");

        // Verificar si el usuario ha cancelado el prompt
        if (anioNacimiento === null) {
            alert("Has cancelado. Serás redirigido.");
            window.location.href = "https://www.google.com";
            return; // Salir de la función
        }

        // Verificar si la entrada es un año de 4 dígitos y si es un número
        if (anioNacimiento.length === 4 && !isNaN(anioNacimiento)) {
            let fechaActual = new Date();
            let anioActual = fechaActual.getFullYear();

            anioNacimiento = parseInt(anioNacimiento);

            // Verificar si el año de nacimiento es mayor o igual a 1990
            if (anioNacimiento >= 1990) {
                let edad = anioActual - anioNacimiento;

                if (edad >= 18) {
                    alert("¡Bienvenido! Puedes acceder a la página.");
                    return; // Salir de la función
                } else {
                    alert("Lo siento, debes ser mayor de 18 años.");
                }
            } else {
                alert("Lo siento, excedes el límite de edad requerido.");
            }
        } else {
            alert("Por favor, ingresa un año válido de 4 dígitos.");
        }
        // Incrementar el contador de intentos solo si la entrada no fue válida
        intentos++;
    }
    // Si el usuario supera los 3 intentos, redireccionar
    alert("Has excedido el número de intentos permitidos. Serás redirigido.");
    window.location.href = "https://www.google.com";
}

verificarEdad();