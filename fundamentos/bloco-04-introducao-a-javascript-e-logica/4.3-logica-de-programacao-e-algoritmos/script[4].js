/* Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
******* */
let n = 7;
let position = n/2 + 0.5
for(let index = 0; index < position; index = index + 1){
  let asterisco = "";
  for(let contador = 0; contador < n; contador = contador + 1){
    if(contador + 1 === position + index || contador + 1 === position - index){
      asterisco = asterisco + '*';
    }
    else if(index + 1 === position){
      asterisco = asterisco + "*"
    }
    else{
      asterisco = asterisco + " ";
    }
  }
  console.log(asterisco)
}