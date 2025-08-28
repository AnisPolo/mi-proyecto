const { ask } = require("./input copy");

async function main() {
    const personas = [
        {
            nombre: "Paula",
            edad: 27,
            profesion: "DISEÑADORA",
            saludar: function() {
                console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`);
            }
        }
        {
            nombre: "Jose",
            edad: 31,
            profesion: "PROGRAMADOR",
            saludar: function() {
                console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`);
            }
        }
    ];

    console.log(personas[0].nombre);
    personas[0].saludar();
    personas[1].saludar();
}
