// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require("./input copy");

async function main() {
  for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
        console.log(i);
        }
    }

    for (let i = 2; i <= 100; i = i + 2) {
        console.log(i);
    }

    let contador = 1;
    while (contador <= 100) {
        if (contador % 2 === 0) {
            console.log(contador);
        }
        contador++;
    }
}

main();