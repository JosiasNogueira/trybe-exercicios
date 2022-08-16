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

  const allLessons = Object.assign({}, {lesson1 , lesson2 , lesson3});
  // O método "Object.assign()" recebe dois parametros, um objeto, e o 
//   que queremos atribuir à ele. Se no primeiro parametro passarmos um objeto 
//   vazio ele criará um objeto novo com as carateristicas do segundo parâmetro.
console.log(allLessons);
