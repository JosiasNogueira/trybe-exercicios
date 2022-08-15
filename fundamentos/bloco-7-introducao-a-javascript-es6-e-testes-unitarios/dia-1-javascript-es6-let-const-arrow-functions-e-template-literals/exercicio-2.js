const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7; 
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
};

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // Utilizando template literals para exibir a mensagem desejada

// ==========================================MODO FOR ==============================================

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

  return array;
};

console.log(sortOddsAndEvens(array));
// ===============================USANDO SORT=============================

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);
// ============array.sort com sort em uma linha.=======================================

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);
// =======================================
const sortOddsAndEvens = () => {
let teste = [5,8,9,4,6,2];
teste.sort();
return teste;
};
console.log(`os números ${sortOddsAndEvens()} se encontram ondenados de forma crescente!`);

// 