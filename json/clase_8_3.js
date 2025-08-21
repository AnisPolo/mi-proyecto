const { ask } = require("./input copy");

async function main() {
  let opcion = "";
  let frutas = [];

  //opciones
  //1 agegar fruta
  //2 eliminar fruta
  //3 salir}}

  while (opcion !== "3") {
    opcion = await ask(
      "¿Qué deseas hacer? (1: agregar fruta, 2: eliminar fruta, 3: salir): "
    );

    if (opcion === "1") {
      let n_fruta = await ask("¿Que fruta deseas agregar? ");
      //
      frutas.push(n_fruta);
      console.log("Fruta agregada: " + n_fruta);
      console.log("Frutas en la lista: " + frutas.join(", "));
    } else if (opcion === "2") {
      if (frutas.length === 0) {
        console.log("No hay frutas para eliminar.");
        continue;
      } else {
        let e_fruta = await ask("¿Que fruta deseas eliminar? ");
        let index = frutas.indexOf(e_fruta);
        if (index !== -1) {
          frutas.splice(index, 1);
          console.log("Fruta eliminada: " + e_fruta);
        } else {
          console.log("Fruta no encontrada:");
        }
        console.log("Frutas disponibles: " + frutas);
      }
    } else if (opcion === "3") {
      console.log("Saliendo del programa...");
      //
    } else {
      console.log("Opción no válida. Por favor, elige 1, 2 o 3.");
    }
  }
}

main();
