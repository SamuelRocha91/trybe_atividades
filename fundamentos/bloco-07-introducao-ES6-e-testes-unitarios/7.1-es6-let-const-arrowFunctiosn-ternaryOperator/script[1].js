/* Crie uma função que receba um número e retorne seu fatorial */

 const fatorial = (numero) => {
  let result = numero;
  for (let index = numero - 1; index > 0; index -= 1) {
    result = result * index;
  }
  return result
}
console.log(`Esse é o fatorial de 3! = ${fatorial(3)}`)
 
/* Crie uma função que receba um número e retorne seu fatorial .
Refatorando */

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

/* Exercício 2
Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
 */
 // retorna 'aconteceu'

const maiorPalavra = (frase) => {
  const arrayFrase = frase.split(" ");
  let longestWord = arrayFrase[0];
  for (let index = 0; index < arrayFrase.length; index += 1) {
    if(longestWord.length < arrayFrase[index].length) {
      longestWord = arrayFrase[index]
    }
  }
  return longestWord
}
console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'))

/* Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). */
let longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu'
let maiorP = longestWord.split(' ')

maiorP.sort(function(a,b){return a.length - b.length})
console.log(maiorP[maiorP.length -1]);