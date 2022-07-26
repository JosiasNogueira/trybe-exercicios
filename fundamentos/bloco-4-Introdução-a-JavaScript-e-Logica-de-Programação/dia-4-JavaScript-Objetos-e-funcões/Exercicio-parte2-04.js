// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.


function MaiorPalavra(array) {
    let MaiorPalavra = array[0];
    for (let index in array){
        if(MaiorPalavra.length < array[index].length){
        MaiorPalavra = array[index];
    }
}
    return MaiorPalavra;
}
console.log(MaiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
