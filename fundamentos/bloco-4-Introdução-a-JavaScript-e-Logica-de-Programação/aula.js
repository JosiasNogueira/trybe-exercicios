
const currentHour = 18;
let message = undefined;

if(currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
}

else if(currentHour >= 18 && currentHour <  22){
    message ="Rango da noite, vamos jantar :D";
}

else if(currentHour >= 14 && currentHour <= 18){
   message = "Vamos fazer um bolo pro café da tarde?";
}

console.log(message);
