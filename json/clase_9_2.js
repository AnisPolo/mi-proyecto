const { ask } = require("./input copy");

async function main() {
  let opcion = "";
  let edades = [];

  while (opcion !== "3") {
    opcion = await ask(`Selecciona una opción:
            \n1. Ingresar edad.
            \n2. Mostrar resumen de edades
            \n3. Salir\n`);
    //

    if (opcion === "1") {
      const edadNueva = Number(await ask("Ingresa una edad:"));
      edades.push(edadNueva);
      //

    } else if (opcion === "2") {
      let mayores = 0;
      for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
          mayores++;
        }
      }
      //
      
    } else if (opcion === "3") {
      console.log("Saliendo del programa...");
    } else {
      console.log("Opción no válida, por favor intenta de nuevo.");
    }
  }
}
main();
