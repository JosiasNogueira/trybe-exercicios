const funcionarioCreator = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return { nomeCompleto, email: `${email}@trybe.com` };
};



const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };
    return employees;
};

console.log(newEmployees(funcionarioCreator));



const juntaName = (nome) => {
    // Vamos separá-lo em itens divididos pelo espaço utilizando o split e então juntá-lo novamente utilizando o caractere "_" utilizando o join
    const josias = nome.toLowerCase().split(' ').join('_');
    return josias
};

console.log(juntaName('Josias Nogueira'));
