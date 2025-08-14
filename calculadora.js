const { ask } = require ('./input')

async function main() {
const num1 = (await ask("ingresa el primer numero: "));
const num2 = (await ask("ingresa el segundo numero: "));
const operacion = (await ask("ingresa la operacion a realizar (suma, resta, multiplicacion, division: "));
/*
switch (operacion) {
    case "suma":
        console.log(`El resultado de la suma es: ${parseFloat(num1) + parseFloat(num2)}`);
        break;
    case "resta":
        console.log(`El resultado de la resta es: ${parseFloat(num1) - parseFloat(num2)}`);
        break;
    case "multiplicacion":
        console.log(`El resultado de la multiplicacion es: ${parseFloat(num1) * parseFloat(num2)}`);
        break;
    case "division":
        console.log(`El resultado de la division es: ${parseFloat(num1) / parseFloat(num2)}`);
        break;
}
*/
let resultado = 0;

 if(operacion === "+") {
    resultado = num1 + num2;
    console.log("El resultado de la suma es: " + resultado);
    } else if(operacion === "-") {
    resultado = num1 - num2;
    console.log("El resultado de la resta es: " + resultado);
    } else if(operacion === "*") {
    resultado = num1 * num2;
    console.log("El resultado de la multiplicacion es: " + resultado);
    } else if(operacion === "/") {
    resultado = num1 / num2;
    console.log("El resultado de la division es: " + resultado); 
    } else {
    console.log("Operacion no valida. Por favor, ingresa una operacion valida.");
 }
}
main();
test test-,
