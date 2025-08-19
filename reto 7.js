const { ask } = require('./helpers/input');

async function main() {
  // 1) Pregunta tipo (C/F) → normaliza a mayúsculas y valida
  // 2) Pregunta temperatura → convierte a Number y valida NaN
  // 3) Según el tipo, calcula la conversión
  // 4) Imprime ambos valores (opcional: formatea con toFixed)
  // }
  
  const tempType = number (await ask ("Ingresa la temperatura: "));
  const temp = number (await ask ("Ingresa tipo de temperatura: "));
  temp_c = 0;
  temp_f = 0;
    if (tempType == "c" || tempType =="C") {
        temp_c = temp;
        temp_f = (32 - temp) * 5/9
        console.log("La temperatura en Fahrenheit es: " + temp_f + "F");
  } else if (tempType == "f" || tempType =="F"){
        temp_f = temp;
        temp_c = (temp_f * 9/5) + 32
        console.log("La temperatura en Celsius es: " + temp_c + "C");
        console.log("La temperatura en Fahrenheit es: " + temp_f + "F");
  }

}

main();