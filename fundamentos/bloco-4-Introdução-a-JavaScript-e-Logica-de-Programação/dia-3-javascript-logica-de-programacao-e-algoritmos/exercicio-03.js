// Escreva dois algoritmos: um que retorne a maior palavra deste array 
// e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = [];
let maiorPalavra = [];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
        menorPalavra = array[index];
 }
}
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(menorPalavra);
console.log(maiorPalavra);
