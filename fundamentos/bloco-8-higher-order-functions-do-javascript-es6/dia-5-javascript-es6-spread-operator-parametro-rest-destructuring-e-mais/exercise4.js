
const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];
//bornIn: nascido em

// escreva filterPeople abaixo
const filterPeople = (arr) => arr.filter(//Como people já é um array podemos aplicar um filter sobre ele.Agora faça o destructuring somente das chaves que são interessantes para o filtro
    ({ nationality, bornIn }) =>
        nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000,
);



console.log(filterPeople(people));