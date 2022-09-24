/* Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. */
let n = 5;

for(let index = 0; index < n; index = index + 1){
  let asterisco = "";
  for(let contador = 0; contador <= index; contador = contador + 1){
    asterisco = asterisco + "*"
  }
  console.log(asterisco)
}