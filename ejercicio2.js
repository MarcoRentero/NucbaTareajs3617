// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es,
// indicar por consola que son iguales.
function NumMisterios(num1, num2) {
    if (num1 > num2) {
        console.log(`el numero mayor es: ${num1}`)
    } else if (num1 < num2) {
        console.log(`el numero mayor es: ${num2}`)
    } else {
        console.log("ambos numero son iguales")
    }
}

NumMisterios(15,15); 
