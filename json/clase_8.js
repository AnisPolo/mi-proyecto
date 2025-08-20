const { ask } = require("./input copy");

async function saludar(nombre) {
  console.log(`Hola estimada(o): ${nombre}, espero que tengas un buen dia`);
}

async function main() {
  const personas = ["Pedro", "Juan", "Paula", "Ana", "Karla"];
  //ascendente
  for (let i = 0; i < personas.length; i++) {
    saludar(personas[i]);
  }
  //descendente
  for (let j = personas.length - 1; j >= 0; j--) {
    saludar(personas[j]);
  }
  let limite = Number(await ask("¿Hasta que numero quieres contar?"));

  let x = 1;

  while (x <= limite){
    console.log(x);
    x++;
  }

}

main();
