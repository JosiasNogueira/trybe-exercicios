const testingScope = (escopo) => { 
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'; // Alterando o tipo da variável para const
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)'; // Alterando o tipo da variável para const
      console.log(elseScope);
    }
  }
  testingScope(false);