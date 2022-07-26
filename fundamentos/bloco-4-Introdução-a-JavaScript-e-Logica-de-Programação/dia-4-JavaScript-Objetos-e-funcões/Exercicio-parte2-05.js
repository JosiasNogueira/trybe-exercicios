// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function repetidos(num){
    let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for(let index in num){
    let verifica = num[index];
    for(let index2 in num){
        if(verifica === num[index2]){
            contNumero += 1;
        }
    }
    if(contNumero > contRepetido){
        contRepetido = contNumero;
        indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return num[indexNumeroRepetido];
}
console.log(repetidos([2, 3, 2, 5, 8, 2, 3]));
//******************************************************************** */ modo objeto
// function maisRepetido(numeros) {
//     let num = {};
  
//     for (let index = 0; index < numeros.length; index += 1) {
//       let valor = numeros[index];
//       if (num[valor] === undefined) {
//         num[valor] = 1;
//       } else {
//         num[valor] = num[valor] + 1;
//       }
//     }
  
//     let contRepetido = 0;
//     let contNumero = 0;
  
//     for (let prop in num) {
//       if (contRepetido < num[prop]) {
//         contRepetido = num[prop];
//         contNumero = prop;
//       }
//     }
  
//     return contNumero;
//   }
  
//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2