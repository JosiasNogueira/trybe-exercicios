const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const adicionandoNoiteLesso2 = (Objecto, key , value) => {
    Objecto[key] = value; // através do "obj[key]" acessamos a chave do objeto cujo valor queremos modificar. 
    // A partir daí basta atribuir o valor desejado, que em nossa função é o terceiro parâmetro (value).
};
adicionandoNoiteLesso2(lesson2, 'turno', 'noite');
 console.log(lesson2);

 
