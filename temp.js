const { ask } = require ('./input')

async function main() {
    
    const temperatura = Number (await ask("Ingresa la temperatura: "));

    if (temperatura < 10) {
        console.log("Hace frío");
    } else if (temperatura >= 10 && temperatura < 20) {
        console.log("Hace fresco");
    } else if (temperatura >= 20 && temperatura < 30) {
        console.log("Hace calor");
    } else if (temperatura >= 30) {
        console.log("Hace mucho calor");
    }
}

main();