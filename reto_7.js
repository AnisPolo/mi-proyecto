const { ask } = require('./input');

async function main() {
  // 1) Pregunta tipo (C/F) → normaliza a mayúsculas y valida
  // 2) Pregunta temperatura → convierte a Number y valida NaN
  // 3) Según el tipo, calcula la conversión
  // 4) Imprime ambos valores (opcional: formatea con toFixed)
  // }
  const tempType = (await ask ("Ingresa tipo la temperatura: "));
  const temp = Number (await ask ("Ingresa tipo de temperatura: "));
  console.log(tempType);

  temp_c = 0;
  temp_f = 0;

    if (tempType == "c") {
        temp_c = temp;
        temp_f = ((temp - 32) * (5/9))
        console.log("La temperatura en Fahrenheit es: " + temp_f + "F");
        console.log("La temperatura en Celsius es: " + temp_c + "C");
  } else if (tempType == "f") {
        temp_f = temp;
        temp_c = ((temp * 1.8) + 32)
        console.log("La temperatura en Celsius es: " + temp_c + "C");
        console.log("La temperatura en Fahrenheit es: " + temp_f + "F");
  } else {
        console.log("Tipo de temperatura no válido. Por favor, ingresa 'C' o 'F'.");
    }

}

main();