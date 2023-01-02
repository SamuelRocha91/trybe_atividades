// Desafio 11
function generatePhoneNumber(array) {
  if(array.length !== 11){
    return 'Array com tamanho incorreto.'
  }

  let objetoFrequencia ={};
  for(let index = 0; index < array.length; index = index + 1){
    if(objetoFrequencia[array[index]] === undefined){
      objetoFrequencia[array[index]] = 1;
    }else{
      objetoFrequencia[array[index]] += 1;
    }
  }
  let numRepet = 0;
  for(let index in objetoFrequencia){
    if(objetoFrequencia[index] > numRepet){
      numRepet = objetoFrequencia[index]
    }
  }

  for(let index = 0; index < array.length ; index = index + 1){
  if(array[index] < 0 || array[index] > 9 || numRepet >= 3){
    return 'não é possível gerar um número de telefone com esses valores'
  }
}
let ddd = array.slice(0,2).join("");
let primeirosDigitos = array.slice(2,7).join("");
let ultimosDigitos = array.slice(7,11).join("");
  return `(${ddd}) ${primeirosDigitos}-${ultimosDigitos}`
}

// Desafio 12
function triangleCheck(lineA, lineB, LineC) {

let proporcionalPelaSoma = lineA < lineB + LineC && lineB < lineA + LineC && LineC < lineA + lineB
let proporcionalPelaSubt = lineA > Math.abs(lineB - LineC) && lineB > Math.abs(lineA - LineC) && LineC > Math.abs(lineA - lineB)
 
return proporcionalPelaSoma && proporcionalPelaSubt
}
console.log(triangleCheck(10,14,8))

// Desafio 13
function hydrate(word) {
  let extrair = /\d+/g;
  let matrizNum = word.match(extrair);
  let soma = 0;
  for(let index = 0; index < matrizNum.length; index = index + 1){
        let num = parseInt(matrizNum[index])
        soma += num;
  }
  let mensagem = `${soma} copo`;
  if (soma > 1){
    mensagem = mensagem + "s";
  }
  return mensagem + " de água"
}
// manipulação realizada a partir de aprendizado obtido na seguinte fonte: https://www.youtube.com/watch?v=pfkkdzeyx6U

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
