// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function EsmultiplodeCinco(num) {
    if (num % 5 === 0) {
        console.log("el numero es multiplo por 5")
    } else {
        console.log("no es multiplo")
    }
}
EsmultiplodeCinco(10);