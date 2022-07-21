const salarioBruto = 4500.10;
let salarioLiquido = 0;

if(salarioBruto <= 1556.94){
    salarioLiquido = (8 / 100) * salarioBruto;
    console.log(salarioLiquido)
}

else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioLiquido = (9/100)*salarioBruto; 
    console.log(salarioLiquido)
}

else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioLiquido = (11/100)*salarioBruto; 
    console.log(salarioLiquido)
}

else if(salarioBruto > 5189.82) {
    salarioLiquido = salarioBruto - 570.88; 
    console.log(salarioLiquido)
} else {
    console.log('Sem valor a pagar')
}

