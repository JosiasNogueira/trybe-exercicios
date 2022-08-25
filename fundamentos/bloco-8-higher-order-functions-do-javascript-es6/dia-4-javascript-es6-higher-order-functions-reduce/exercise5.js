const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    // escreva seu código aqui Começamos um reduce 
    // sobre o array de nomes, como iremos contar a quantidade de letras 'a' que aparecem, o valor inicial de curr será 0.
    return names.reduce((acc, currWord) =>
        acc + currWord.split('').reduce((acumulador, currLetter) => {
            if (currLetter === 'a' || currLetter === 'A') return acumulador + 1;
            return acumulador;
        }, 0), 0);

}