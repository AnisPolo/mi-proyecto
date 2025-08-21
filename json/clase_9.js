const { ask } = require("./input copy");

function obtenerPromedio (numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }
    const promedio = total / numeros.length;

    return promedio;
}

function ObtenerMayor (numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}

function ObtenerMenor (numeros) {
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
}

function resumenDatos (numeros) {
    const promedio = obtenerPromedio(numeros);
    const mayor = ObtenerMayor(numeros);
    const menor = ObtenerMenor(numeros);

    return {promedio, mayor, menor};  

}

async function main() {
    const edades = [20, 18, 25, 30, 22];
    const lista = [5, 20, 8, 99, 3];
    const datos = [70, 80, 90, 100, 60];
    const nombres = ["Anise", "Juan", "Pedro", "Maria", "Paula"];

    console.log(`El promedio de edades es = ${obtenerPromedio(edades)}`);
    console.log(`El numero mayor es = ${ObtenerMayor(edades)}`);
    console.log(`El numero menor es = ${ObtenerMenor(edades)}`);
    const estadisticas = resumenDatos(datos);
    console.log(`El resumen estadistico de ${datos} es`);
    console.log(`Promedio: ${estadisticas.promedio}`);
    console.log(`Mayor: ${estadisticas.mayor}`);
    console.log(`Menor: ${estadisticas.menor}`);

}

main();