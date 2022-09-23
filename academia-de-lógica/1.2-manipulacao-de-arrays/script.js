/* 1. Encontre o index através do valor de um elemento.Escreva um algoritmo que recebe 2 parâmetros:

Um array contendo um conjunto de números
O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:

"Elemento não encontrado no array" */

let numbers = [0, 1, 2, 3, 4, 5, 6];
let value = 7;
let existed = false;
let contador;
for(let index = 0; index < numbers.length; index = index + 1){
  if(numbers[index] === value){
      existed = true;
      contador = index;
  }
}
if(existed === true){
  console.log( `O valor existe dentro da variável numbers no índice ${contador}`)
}
else{
  console.log(`Elemento não encontrado no array`)
}