/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. */
const a = 10;
const b = 2;

function soma(n1, n2){
  return `A soma de ${n1} + ${n2} é igual a ${n1 + n2}`
}

function subtracao(n1, n2){
  return `A subtração de ${n1} por ${n2} é igual a ${n1 - n2}`
}

function multiplicacao(n1, n2){
  return `A multiplicação de ${n1} por ${n2} é igual a ${n1 * n2}`
}

function divisao(n1, n2){
  return `A divisão de ${n1} por ${n2} é igual a ${n1 / n2}`
}

function modulo(n1, n2){
  return `O resto da divisão de ${n1} por ${n2} é igual a ${n1%n2}`
}

console.log(soma(a,b))
console.log(subtracao(a,b))
console.log(multiplicacao(a,b))
console.log(divisao(a,b))
console.log(modulo(a,b))