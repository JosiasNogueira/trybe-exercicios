const custo = 5;
const venda = 160;
const imposto = (20 / 100) * 100;
const custoTotal = custo + imposto;

if (custo<0 || venda<0 || imposto<0){
    console.log("Erro, valor zerado")
}

let lucro = (venda - custoTotal) * 1000;
console.log(lucro);
