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

/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor */

let teste2 = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor(array){
  let indiceDoMenor = 0;
  let menorValorArray = array[0];
  for(let index = 0; index < array.length; index = index + 1){
    if(menorValorArray > array[index]){
      menorValorArray = array[index];
      indiceDoMenor = index;
    }
  }
  return indiceDoMenor
}

console.log(indiceMenorValor(teste2))

/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres */

let teste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array){
  let maisCaracteres = array[0];
  for(let index = 0; index < array.length; index = index + 1){
    if(array[index].length > maisCaracteres.length){
      maisCaracteres = array[index];
    }
  }
  return maisCaracteres
}

console.log(maiorNome(teste3))

/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete */

let teste4 = [2, 3, 2, 5, 8, 2, 3];
let objeto = {

};
function inteiroMaisRepetido(array){
for(let index = 0; index < array.length; index = index +1){
  let sum = 0;
  for(let index2 = 0; index2 < array.length; index2 = index2 + 1){
    if(array[index] === array[index2]){
       sum = sum + 1;
    }
  }
  objeto[array[index]] = sum;
}
let repeticoes = 0;
let maisrepetido = 0;
for(let index in objeto){
  if(objeto[index] > repeticoes){
    repeticoes = objeto[index];
    maisrepetido = index
  }
  return maisrepetido
  }
}
console.log(inteiroMaisRepetido(teste4))

/* Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N */



function somaDosInteiros(n){
  let inteirosPositivos = n > 0;
  if(inteirosPositivos === false){
    return erro
  }
  let soma = 0;
  for(let index = 1; index <= n; index = index + 1){
    soma = soma + index;
  }
  return soma
}

console.log(somaDosInteiros(5))

/* Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word */

function comparandoStrings(word, ending){
  sizestrings = word.length > ending.length;
  if(sizestrings === false){
    return false
  }
  initEnding = word.length - ending.length;
  somaDasigualdades = 0;
  for(let index = 0; index < word.length; index = index + 1){
    if(word[index + initEnding] === ending[index]){
      somaDasigualdades = somaDasigualdades + 1
    }
  }
    if (somaDasigualdades === ending.length){
      return true
    }
    else{
      return false
    }
  }
  console.log(comparandoStrings("fernando", "fer"))