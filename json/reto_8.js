/*1. Abre el archivo `index.js` y escribe tu función llamada `analizarCalificaciones`. 
Esta función debe recibir un arreglo de números (del 0 al 100) que representan las calificaciones de estudiantes.
menu (agregar, quitar, analisis, salir) 
2. La función debe devolver un objeto con la siguiente información:
   - **Cantidad de aprobados** (calificaciones ≥ 70)
   - **Cantidad de reprobados** (calificaciones < 70)
   - **Promedio general**
   - **La calificación más alta y la más baja**/

const { ask } = require("./input copy");

function aprobados(datos) {
  let alumnosAprobados = [];
  for (i = 0; i < datos.length; i++) {
    if (datos[i] >= 70) {
      alumnosAprobados.push(datos[i]);
    }
  }
  return alumnosAprobados;
}

function reprobados(datos) {
  let alumnosReprobados = [];
  for (i = 0; i < datos.length; i++) {
    if (datos[i] <= 70) {
      alumnosReprobados.push(datos[i]);
    }
  }
  return alumnosReprobados;
}

function promedio(datos) {
  let suma_promedio = 0;

  for (let i = 0; i < datos.length; i++) {
    suma_promedio = suma_promedio + datos[i];
  }

  let promedio_final = suma_promedio / datos.length;

  return promedio_final;
}

function califAlta(datos) {
  let alta = datos[0];
  for (i = 1; i < datos.length; i++) {
    if (datos[i] > alta) {
      alta = datos[i];
    }
  }
  return alta;
}

function califBaja(datos) {
  let baja = datos[0];
  for (i = 1; i < datos.length; i++) {
    if (datos[i] < baja) {
      baja = datos[i];
    }
  }
  return baja;
}

async function analizarCalificaciones() {
  const calificaciones = [88, 22, 51, 37, 55, 91, 78, 65, 85, 100, 90];

  console.log(`Los alumnos aprobados son: ${aprobados(calificaciones)}`);
  console.log(`Los alumnos reprobados son: ${reprobados(calificaciones)}`);
  console.log(`El promedio de calificaciones es: ${promedio(calificaciones)}`);
  console.log(`La calificacion mas baja es: ${califBaja(calificaciones)}`);
  console.log(`La calificacion mas alta es: ${califAlta(calificaciones)}`);
}

analizarCalificaciones();
