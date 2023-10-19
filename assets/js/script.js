console.log('Conexión Existosa')

// Variable para almacenar la lista de estudiantes
let listaEstudiantes = []
console.log(listaEstudiantes)

// Función para registrar un estudiante
function registrarEstudiantes() {
    let nombre = prompt("Ingrese el nombre del estudiante")
    let documento = prompt("Ingrese el documento del estudiante")
    let telefono = prompt("Ingrese el teléfono del estudiante")
    let direccion = prompt("Ingrese la dirección del estudiante")
    let correo = prompt("Ingrese el correo electrónico del estudiante")
    let nota1 = parseFloat(prompt("Ingrese la primera nota del estudiante"))
    let nota2 = parseFloat(prompt("Ingrese la segunda nota del estudiante"))
    let nota3 = parseFloat(prompt("Ingrese la tercera nota del estudiante"))

    let resultado = calcularResultadosNotas(nota1, nota2, nota3)

    // Almacenar los datos del estudiante en la lista
    let estudiante = {
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

    listaEstudiantes.push(estudiante)

    alert("Estudiante registrado exitosamente.✅")
}

// Función para calcular la nota final y determinar el resultado
function calcularResultadosNotas(nota1, nota2, nota3) {
    let notaFinal = (nota1 * 0.25) + (nota2 * 0.35) + (nota3 * 0.4)
    if (notaFinal > 4) {
        return "Ganó"
    } else if (notaFinal >= 3.5) {
        return "Tiene derecho a nivelatorio"
    } else {
        return "Perdió"
    }
}

// Función para mostrar los resultados
function mostrarResultados() {
    console.log("Resultados de los estudiantes:")
    listaEstudiantes.forEach(function (estudiante) {
        console.log("Nombre: " + estudiante.nombre)
        console.log("Documento: " + estudiante.documento)
        console.log("Resultado: " + estudiante.resultado)
        console.log("--------------")
    });
}

// Ciclo para iniciar sesión, registrar y mostrar resultados de los estudiantes 
let usuario = 'admin'
let contrasena = 'admin123'
let intentosUsuario = 2

while (intentosUsuario > 0) {
    const usuarioIngresado = prompt('👤Ingresar Usuario')
    const contrasenaIngresada = prompt('🔑Ingresar Contraseña')

    if (usuarioIngresado === usuario && contrasenaIngresada === contrasena) {
        alert('👏🏻 Inicio de sesión exitoso. ¡Bienvenido! ' + usuarioIngresado + ' 👏🏻')
        console.log('Acceso concedido✅')

        let repetir = true
        while (repetir) {

            const opciones = Number(prompt(
                "📚Institución de Idiomas📚 | Usuario " + usuario + "\n" +
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
                    registrarEstudiantes()
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