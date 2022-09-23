/* Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10 */
let fatorial = 10;
let resultado = 1;
for(let index = fatorial - 1; index > 0; index = index - 1){
  if( index !== 1){
  fatorial = fatorial + ' * ' + index;
  }
  else{
    fatorial = fatorial + ' * ' + index + '=';
  }
    resultado = resultado * index;
}
console.log(`10!=${fatorial}${resultado}`)