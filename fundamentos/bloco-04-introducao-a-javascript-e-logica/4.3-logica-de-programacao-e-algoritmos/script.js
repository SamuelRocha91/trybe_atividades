/* Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10 */
let fatorial = 10;
let resultado = 10;
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

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let invertida = "";
for(let index = word.length - 1; index >= 0; index = index - 1){
  invertida = invertida + word[index];
}
console.log(invertida)

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorP = "";

for(let index = 0; index < array.length; index= index + 1){
  if(maiorP.length < array[index].length){
    maiorP = array[index];
  }
}
console.log(`A maior palavra do Array é ${maiorP}`)