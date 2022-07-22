const a = 10;
const b = 50;
const c = 40;


if(a>b && a>c){
    console.log("a é maio que b e c");
}
else if(b<a && b>c){
    console.log("b é maior que a e c");
}
else if(c<b && c>a){
    console.log("c é maior que a e b");
}
else{
    console.log("Não há numero maior entre os 3");
}
