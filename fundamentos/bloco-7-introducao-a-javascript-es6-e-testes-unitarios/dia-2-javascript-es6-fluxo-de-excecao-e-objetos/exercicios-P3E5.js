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

const totalAlunos = (obj) => { // essa será a função responsável pela lógica e ela receberá um objeto como parâmetro.
    let total = 0; // começamos a contagem de alunos com 0;

const array = Object.keys(obj); // pegamos as chaves do objeto;

for (index in array) { // for in para iterar sobre o array de chaves
    total += obj[array[index]].numeroEstudantes // incremente a variável total a cada iteração
}
return total; // a função retorna o total de alunos após as iterações do "for/in"
};
console.log(totalAlunos(allLessons));