/* Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */ 

let n = 5;

for(let index = 0; index < n; index = index + 1){
  let asterisco = "";
  for(let contador = 0; contador < n; contador = contador + 1){
    asterisco = asterisco + "*"
  }
  console.log(asterisco)
}
