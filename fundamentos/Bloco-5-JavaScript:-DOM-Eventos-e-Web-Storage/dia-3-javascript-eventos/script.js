function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo
//   Primeiro passo: Crie uma lista com os dias
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//   Segundo passo: Crie a função a ser executada para popular nosso calendário.
function createDaysOfTheMonth() {
    // Terceiro passo: Armazene o elemento da id days em uma variável, para isso, será utilizado o querySelector.  
    let getDaysList = document.querySelector('#days');
    // Quarto passo: Crie um loop que popule a ul com nossa lista.
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        // Quinto passo Crie uma variável que gere uma li e outra para indicar o dia.
        let day = decemberDaysList[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        // Sexto passo: Crie condicionais dentro do loop.
        if (day === 24 || day === 31) {  //Sétimo passo: Adicione a lógica a cada etapa condicional que você criou.
            //  // Caso o dia for 24 ou 31
            dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
            getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
        } else if (day === 4 || day === 11 || day === 18) {
            // // Caso o dia for 4, 11 ou 18
            dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
            getDaysList.appendChild(dayItem);
        } else if (day === 25) {
            // Caso o dia for 25
            dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
            getDaysList.appendChild(dayItem);
        } else {
            // Caso o dia for qualquer outro dia que não seja os de cima
            // Caso seja qualquer outro dia adicione a classe day ao li criado
            dayItem.className = 'day';
            getDaysList.appendChild(dayItem);
        }
    }
}
createDaysOfTheMonth();

//   Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function CriaFeriados(buttonName) {
    let DivPai = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    let novoBotaoId = 'btn-holiday';

    botao.innerHTML = buttonName;
    botao.id = novoBotaoId
    DivPai.appendChild(botao);
}
CriaFeriados('Feriados');

    // Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
    // Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem
    // a classe "holiday"👀 É interessante que esse botão possua também a lógica inversa.Ao ser clicado novamente,
    // ele retorna à configuração inicial com a cor "rgb(238,238,238)".