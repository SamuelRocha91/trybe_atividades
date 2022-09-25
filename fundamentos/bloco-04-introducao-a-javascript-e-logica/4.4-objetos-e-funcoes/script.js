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

/* Faça um programa que retorne o maior de dois números. */

function maior(n1, n2){
  if(n1 > n2){
    return `${n1} é maior que ${n2}`
  }
  else if(n2 > n1){
    return `${n2} é maior que ${n1}`
  }
  else{
    return `Números iguais`
  }
}
console.log(maior(a,b))

/* Faça um programa que retorne o maior de três números.
 */

let c = 13;

function maiorDeTres(n1, n2, n3){
  if(n1 > n2 && n1 > n3){
    return `${n1} é maior que ${n2} e ${n3}`
  }
  else if(n2 > n1 && n2 > n3){
    return `${n2} é maior que ${n1} e ${n3}`
  }
  else{
    return `${n3} é maior que ${n1} e ${n2}`
  }
}

console.log(maiorDeTres(a,b,c))

/* Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”. */

function positivoNegativo(n){
  if(n > 0){
    return `Positive`
  }
  else if (n < 0){
    return `Negative`
  }
  else{
    return `Zero`
  }
}

console.log(positivoNegativo(a))

/* Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro. */

let ang1 = 90;
let ang2 = 45;
let ang3 = 45;

function trianguloValido(n1, n2, n3){
  ladosValidos = n1 > 0 && n2 > 0 && n3 > 0;
  if(ladosValidos === true){
    if(n1 + n2 + n3 === 180){
      return `True`
    }
    else{
      return `False`
    }
  }
  else{
    return `Erro`
  }
}
console.log(trianguloValido(ang1,ang2,ang3))