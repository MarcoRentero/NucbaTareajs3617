// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el
// que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function imprimirArraySinQuintoElemento(array) {
  for (let i = 0; i &lt; array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArraySinQuintoElemento(miArray);

