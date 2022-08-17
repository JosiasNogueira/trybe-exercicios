const { sum, myRemove } = require('./sum');

describe('exercicio 7.3 exercicio 1', () => {

    test('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(4 + 5).toBe(9);
    })

    test('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(0 + 0).toBe(0);
    })

    test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
        expect(() => sum()).toThrow(Error);
    })

    test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada', () => {
        expect(() => sum()).toThrow("parameters must be numbers");
    })


});

describe('exercicio 7.3 exercicio 2', () => {

    test('deve retornar um array removendo o item correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })

});

describe('exercicio 7.3 exercicio 2', () => {
});