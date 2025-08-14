const { ask } = require ('./input');

async function main() {
    const temparatura = Number (await ask("Ingresa la temperatura: "));

    if (temparatura < 10) {
        console.log("Hace frío");
    } else if (temparatura >= 10 && temparatura < 20) {
        console.log("Hace fresco");
    } else if (temparatura >= 20 && temparatura < 30) {
        console.log("Hace calor");
    } else if (temparatura >= 30) {
        console.log("Hace mucho calor");
    }
}

main();