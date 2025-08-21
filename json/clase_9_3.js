const { ask } = require("./input copy");

async function main() {
    const palabra = await ask("Ingresa una palabra:");
    let resultado = "";
    for (let i = palabra.length -1; i >= 0; i--) {
        resultado = resultado + palabra[i];
    }

    console.log("La palabra al reves es:" + resultado);
}
main();