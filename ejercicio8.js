// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del
// array multiplicado por el número pasado por parámetro.
function multiplicarArrayPorNumero(array, numero) {
  for (let i = 0; i &lt; array.length; i++) {
    console.log(array[i] * numero);
  }
}

const miArray = [1, 2, 3, 4, 5];
const numero = 2;
multiplicarArrayPorNumero(miArray, numero);

