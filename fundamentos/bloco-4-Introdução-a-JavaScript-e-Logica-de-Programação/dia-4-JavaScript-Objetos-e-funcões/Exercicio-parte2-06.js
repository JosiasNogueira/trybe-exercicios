// 6 - Crie uma função que receba um número natural (número inteiro não negativo)
//  N e retorne o somatório de todos os números de 1 até N.

function somatório(numero){
    let total = 0;
    for(let index = 1; index <= numero; index =+ 1){
        total = total + index;
    }
    return total;
}
console.log(somatório(6));
