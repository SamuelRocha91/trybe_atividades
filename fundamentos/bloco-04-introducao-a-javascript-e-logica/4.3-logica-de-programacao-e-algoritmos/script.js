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

let menorP = array[0];

for(let index = 0; index < array.length; index = index + 1){
  if(menorP.length > array[index].length){
    menorP = array[index]
  }
}
console.log (`A menor palavra no Array é ${menorP}`)

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorPrimo;
let numInicial = 2;
let numFinal = 50;


for(let index = numInicial; index <= numFinal; index = index+ 1){
     let qtdadeDivisores = 1;
    for( let contador = numInicial; contador <= index; contador = contador +1){
      if(index % contador === 0){
        qtdadeDivisores = qtdadeDivisores + 1;
      }
    }
    if (qtdadeDivisores === 2){
        maiorPrimo = index
    }
}
console.log(maiorPrimo)
