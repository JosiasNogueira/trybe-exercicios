
// const checaNumero = (meNumero, numero) => meNumero === numero;

// const geraNumero = (min, max) => {  // função recebe 2 numeros 
    // min = Math.ceil(min); //numero min aplicando math.ceil arredonda pra cima caso seja qubrado
    // max = Math.floor(max); // numero max arredonda pra baixo caso seja quebrado

    // return Math.floor(Math.random() * (max - min) + min); // retorna o numero entre 1 e 5.
}
// console.log(geraNumero(1.1, 5));

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);

    return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));