/* Crie uma função que receba um número e retorne seu fatorial */

const fatorial = (numero) => {
  let fator = numero;
  for (let index = numero - 1; index > 0; index -= 1) {
    fator = fator * index;
  }
  return fator
}
console.log(fatorial(3))