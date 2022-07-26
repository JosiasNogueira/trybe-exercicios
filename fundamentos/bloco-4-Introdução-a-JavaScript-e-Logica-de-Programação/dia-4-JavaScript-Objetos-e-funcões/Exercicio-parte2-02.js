// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

let resultado = [];

function receba(array) {
    for (let index = 0; index < array.length; index ++) {
        if (array[index] > resultado) {
            resultado = array[index];
        }
    }
    return resultado;
}
console.log(receba([2, 5, 9, 1, 4]));
