const datosEntrenamiento = [];
let diferencia = [];

// Función para manejar el envío del formulario
document.getElementById('formulario2').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Obtener el valor del campo numérico ingresado por el usuario
    const valorCampoNumerico = parseFloat(document.getElementById('puntaje_referencia').value);

    // Generar el dato de entrenamiento correspondiente
    const numeroActual = datosEntrenamiento.length; // El número actual es simplemente la longitud actual de los datos de entrenamiento
    const numeroSiguiente = valorCampoNumerico; // El número siguiente es el valor ingresado por el usuario
    datosEntrenamiento.push({ input: [numeroActual], output: [numeroSiguiente] });

    // Entrenar la red neuronal con los datos de entrenamiento actualizados
    redNeuronal.train(datosEntrenamiento);

    // Predecir el próximo número en la secuencia
    const proximaPrediccion = redNeuronal.run([numeroActual])[0];

    // Comparar con el número real y mostrar el resultado
    const diferencia = proximaPrediccion - valorCampoNumerico;

    console.log("Diferencia entre el número real y la predicción:", diferencia);

    // Actualizar la visualización del número predicho y la diferencia en el HTML
    document.querySelector('.ver').textContent = `El próximo número predicho es: ${proximaPrediccion}`;
    document.querySelector('.diferencia').textContent = `Diferencia con el número real: ${diferencia}`;

    // Limpiar el campo de entrada
    document.getElementById('puntaje_referencia').value = "";
});

// Crear una nueva red neuronal
const redNeuronal = new brain.NeuralNetwork();

function asignarTextoElemento(elemento, texto) {
    // la funcion asignartTextoElemento reibe dos variables llamadas (elemento,texto);
   let elementoHtml = document.querySelector(elemento);
   elementoHtml.innerHTML = texto;
   return;
}