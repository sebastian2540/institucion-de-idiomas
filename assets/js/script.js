console.log('Conexión Existosa')

// Funcion para iniciar sesión
function inicioSesion() {
    let usuario = 'admin'
    let contrasena = 'admin123'
    let intentosUsuario = 3

    while (intentosUsuario > 0) {
        const usuarioIngresado = prompt('Usuario')
        const contrasenaIngresada = prompt('Contraseña')

        if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
            alert('👏🏻 Inicio de sesión exitoso. ¡Bienvenido! ' + usuarioIngresado + ' 👏🏻')
            console.log('Acceso concedido✅')
        } else {
            intentosUsuario--
            if (intentosUsuario > 0) {
                alert('Datos incorretos. Te quedan ' + intentosUsuario)
                console.warn('Acceso denegado❌')
            } else {
                alert('Has excedido el número máximo de intentos. Cuenta bloqueda.❌')
                console.error('Acceso denegado❌')
            }
        }

    }
}

// Variable para almacenar la lista de estudiantes
var listaEstudiantes = [];
console.log(listaEstudiantes)

// Función para calcular la nota final y determinar el resultado
function calcularResultado(nota1, nota2, nota3) {
    var notaFinal = (nota1 * 0.25) + (nota2 * 0.35) + (nota3 * 0.4);
    if (notaFinal > 4) {
        return "Ganó";
    } else if (notaFinal >= 3.5) {
        return "Tiene derecho a nivelatorio";
    } else {
        return "Perdió";
    }
}

// Función para registrar un estudiante
function registrarEstudiante() {
    var nombre = prompt("Ingrese el nombre del estudiante");
    var documento = prompt("Ingrese el documento del estudiante");
    var telefono = prompt("Ingrese el teléfono del estudiante");
    var direccion = prompt("Ingrese la dirección del estudiante");
    var correo = prompt("Ingrese el correo electrónico del estudiante");
    var nota1 = parseFloat(prompt("Ingrese la primera nota del estudiante"));
    var nota2 = parseFloat(prompt("Ingrese la segunda nota del estudiante"));
    var nota3 = parseFloat(prompt("Ingrese la tercera nota del estudiante"));

    var resultado = calcularResultado(nota1, nota2, nota3);

    // Almacenar los datos del estudiante en la lista
    var estudiante = {
        nombre: nombre,
        documento: documento,
        telefono: telefono,
        direccion: direccion,
        correo: correo,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        resultado: resultado
    };

    listaEstudiantes.push(estudiante);

    alert("Estudiante registrado exitosamente.✅");
}

// Función para mostrar los resultados
function mostrarResultados() {
    console.log("Resultados de los estudiantes:");
    listaEstudiantes.forEach(function (estudiante) {
        console.log("Nombre: " + estudiante.nombre);
        console.log("Documento: " + estudiante.documento);
        console.log("Resultado: " + estudiante.resultado);
        console.log("--------------");
    });
}

// Ciclo para registrar y mostrar resultados de los estudiantes 
let repetir = true
while (repetir) {

    const opciones = Number(prompt(
        "Institución de Idiomas | CESDE \n" +
        "1. Registrar Estudiante \n" +
        "2. Mostrar Resultados \n" +
        "3. Salir"
    ))

    switch (opciones) {
        case 1:
            var opcion = prompt("¿Desea registrar un estudiante? (Si/No)").toLowerCase()
            if (opcion !== "sí" && opcion !== "si") {
                break; // Finaliza el ciclo si la respuesta no es "Sí"
            }
            registrarEstudiante()
            break;

        case 2:
            // Mostrar resultados al finalizar el registro
            mostrarResultados();
            break;

        case 3:
            repetir = false
            console.warn('Saliendo de la aplicación ❌')
            break;

        default:
            console.error('Opción incorrecta ❌, intenta nuevamente')
            break;
    }

}










