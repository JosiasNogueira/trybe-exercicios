//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let array = [];
let div = [];

for (let i = 1; i < 26; i += 1) {
    array.push(i);
    div.push(i / 2);    
}
console.log(array);
console.log(div);
