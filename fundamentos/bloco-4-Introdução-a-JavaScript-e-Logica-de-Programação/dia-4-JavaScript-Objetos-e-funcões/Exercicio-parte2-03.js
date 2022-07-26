// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.


let resultado = 15;

function receba(array) {
    for (let index = 0; index <= array.length; index ++) {
        if (array[index] < resultado) {
            resultado = array[index];
        }
    }
    return resultado;
}
console.log(receba([10, 5, 9, 7, 4]));
// *********************************************************************** outro modo for in
function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
  
    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6