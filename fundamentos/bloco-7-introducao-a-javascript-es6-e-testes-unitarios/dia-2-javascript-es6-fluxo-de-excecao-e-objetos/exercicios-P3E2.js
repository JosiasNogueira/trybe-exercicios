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

  const listKeys = (obj) =>  Object.keys(obj);
 // O metodo "Object.keys()" faz essa listagem, basta passarmos o objeto que queremos referenciar como parâmetro.
 
 console.log(listKeys(lesson1));
 

 const listValues = (obj) =>  Object.values(obj);
 // O metodo "Object.Values()" faz essa listagem, basta passarmos o objeto que queremos referenciar como parâmetro.
 
 console.log(listValues(lesson1));
