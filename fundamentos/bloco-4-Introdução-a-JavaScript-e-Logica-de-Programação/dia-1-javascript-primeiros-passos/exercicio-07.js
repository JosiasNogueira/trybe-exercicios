const Porcentagem = 40; 

if(Porcentagem <0 || Porcentagem > 100){
    console.log("Nota incorreta!");

} else if (Porcentagem >= 90){
    console.log('A');
}

else if(Porcentagem >= 80){
    console.log('B');
}

else if(Porcentagem >= 70){
    console.log('C');
}

else if(Porcentagem >= 60){
    console.log('D');
}

else if(Porcentagem >= 50){
    console.log('E');

} else {
    console.log('F');
}


