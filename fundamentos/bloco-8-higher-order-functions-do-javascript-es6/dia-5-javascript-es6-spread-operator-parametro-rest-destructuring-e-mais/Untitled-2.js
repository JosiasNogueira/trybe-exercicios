// escreva sum abaixo

const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

console.log(sum(4, 5, 6, 7));