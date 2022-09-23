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

/* 2. Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:

"x, y, z, ...n" */

let listimpar = [];
for(let index = 1; index <= 50; index = index + 1){
  if(index % 2 === 1){
    listimpar.push(index)
  }
}
let string = listimpar[0];
for(let index = 1; index < listimpar.length; index = index + 1){
   string = string + ", " + listimpar[index];
}
console.log(string)

/* Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais:

"Há 50 ou mais números divisíveis por 3"

Caso o contrário: "Sequência muito pequena." */

let valueI = 1;
let valueF = 300;
let arrayNum = [];
for(let index = valueI; index <= valueF; index = index +1){
  arrayNum.push(index);
}
let diviPor3 = 0;
for(let index = 0; index < arrayNum.length; index = index + 1){
  if(arrayNum[index] % 3 === 0){
    diviPor3 = diviPor3 + 1
  }
}
if(diviPor3 >= 50){
  console.log("Há 50 números ou mais divisíveis por 3")
}
else{
  console.log("sequência muito pequena")
}