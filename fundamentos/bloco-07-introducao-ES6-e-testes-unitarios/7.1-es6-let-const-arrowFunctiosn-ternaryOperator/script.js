/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

const testingScope = (escopo) => {
  if (escopo) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope}ótimo, fui utilizada no escopo !`
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
    console.log(elseScope)
  }
};

testingScope(true)

/* Crie uma função que retorne um array em ordem crescente
   Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
 */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  let position;
  for( let index = 0; index < array.length - 1; index += 1) {
    for(let index2 = index + 1; index2 < array.length; index2 += 1) {
      if(array[index] > array[index2]) {
         position = array[index];
        array[index] = array[index2] ;
        array[index2] = position;
      }
    }
  }
  return array
}


console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`); 

/* Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números. */

console.log(oddsAndEvens.sort(function(a,b){a-b}))