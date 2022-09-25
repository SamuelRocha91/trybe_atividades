/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for */

let palavra = "trybe";

function verificaPalindromo(word){
  if(word.split().reverse().join() === word){
    return true
  }
  else{
    return false
  }
}
console.log(verificaPalindromo(palavra))

/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor */

let teste = [2, 3, 6, 7, 10, 1];

function indiceMaiorValor(array){
  let maiorValor = array[0];
  let indiceDoMaior = 0;
  for(let index = 0; index < teste.length; index = index + 1){
    if(array[index] > maiorValor ){
      maiorValor = array[index];
      indiceDoMaior = index;
    }
  }
    return indiceDoMaior
}
console.log(indiceMaiorValor(teste))