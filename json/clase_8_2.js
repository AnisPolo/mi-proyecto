const { ask } = require("./input copy");

async function main() {
  const frutas = ["Manzana", "Banana", "Naranja", "Fresa", "Kiwi"];
  const cajon = Number(await ask("¿Que cajon quieres abrir? (1-5)"));

  console.log("Fruta en el cajon " + cajon + " = " + frutas[cajon - 1]);

  for (let i = 1; i <= 5; i++) {
    if (i === cajon) {
      console.log("En el cajon " + i + " hay: " + frutas[i - 1]);
    }
  }
}

main();
