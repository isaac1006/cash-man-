// Define las variables globales
let datosEntrenamiento = [];
let diferencia = [];
const promedios = [];
const ingresados = [];
console.log(promedios);
// Función principal que se llama desde el evento onclick
function procesarEntrenamiento() {
    console.log("ingrese");
    inputEntrenamiento();

}

// Función para manejar el envío del formulario
function intentoRedNueronal() {
    // Lógica para el envío del formulario
}

// Función para manejar la entrada de entrenamiento
function inputEntrenamiento() {
    // Captura los datos desde el campo de formulario llamado 'formulario2'
    let ingresado = parseFloat(document.getElementById('formulario2').value);
    
    // Ingresa el dato ingresado en el arreglo 'ingresados'
    ingresados.push(ingresado); 
    
    // Calcula el promedio de los datos ingresados
    let promedio = calcularPromedio(ingresados);

    // Agrega el promedio al arreglo de 'promedios'
    promedios.push(promedio);
   mostrarArray(promedios);
    // Puedes hacer lo que quieras con el arreglo de promedios aquí, como mostrarlo en la interfaz de usuario, etc.
}

// Función para comparar los registros
function compararRegistros(array1, array2) {
    // Verificar que ambos arrays tengan la misma longitud
    if (array1.length !== array2.length) {
        console.log("Los arrays no tienen la misma longitud.");
        return;
    }

    let resultado = [];

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > array2[i]) {
            resultado.push(0); // Si el registro de array1 es mayor que el de array2, se guarda 0
        } else {
            resultado.push(1); // Si el registro de array1 no es mayor que el de array2, se guarda 1
        }
    }

    return resultado;
}

// Función para procesar los valores para la red neuronal
function valoresparaRed() {
    // Compara los promedios con los datos de entrenamiento y guarda los resultados en 'diferencia'
    diferencia = compararRegistros(promedios, datosEntrenamiento);
    console.log("Diferencia:", diferencia);
}

// Función para asignar texto a un elemento del DOM
function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    if (Array.isArray(texto)) {
        // Si el texto es un array, lo convertimos a una cadena separada por comas
        elementoHtml.innerHTML = texto.join(', ');
    } else {
        // Si no es un array, simplemente lo asignamos como está
        elementoHtml.innerHTML = texto;
    }
}

// Función para calcular el promedio
function calcularPromedio(datosEntrenamiento) {
    // Comprueba si el array está vacío
    if (datosEntrenamiento.length === 0) {
        return 0; // Devuelve 0 si el array está vacío para evitar divisiones por cero.
    } else {
        // Calcula la suma de todos los elementos del array utilizando el método reduce
        const suma = datosEntrenamiento.reduce((a, b) => a + b, 0);
        // Calcula el promedio dividiendo la suma total por la cantidad de elementos en el array
        const promedio = suma / datosEntrenamiento.length;
        // Devuelve el promedio calculado
        return promedio;
        console.log(promedio);
    }
}