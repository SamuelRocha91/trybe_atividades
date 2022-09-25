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