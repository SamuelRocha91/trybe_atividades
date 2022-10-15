/* Crie uma função que receba um número e retorne seu fatorial */

const fatorial = (numero) => {
  let result = numero;
  for (let index = numero - 1; index > 0; index -= 1) {
    result = result * index;
  }
  return result
}
console.log(`Esse é o fatorial de 3! = ${fatorial(3)}`)