// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true){
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(word) {
  return word.split(" ");
}

// Desafio 4
function concatName(arrayDeStrings) {
  let word = arrayDeStrings[arrayDeStrings.length -1] + ", " + arrayDeStrings[0];
  return word
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties
}

// Desafio 6
function highestCount(array) {
  let maiorValor = array[0];
  for(let value of array){
    if(maiorValor < value){
      maiorValor = value;
    }
  }
  let numRepeticoes = 0;
  for(let value of array){
    if(maiorValor === value){
      numRepeticoes += 1;
    }
  }
  return numRepeticoes
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let dist1 = Math.abs(mouse - cat1);
let dist2 = Math.abs(mouse - cat2);
if(dist1 < dist2){
  return "cat1"
}
else if(dist2 < dist1){
  return "cat2"
}
else{
  return "os gatos trombam e o rato foge"
}
}

// Desafio 8
function fizzBuzz(array) {
  let arrayDeStrings = [];

  for(let index = 0; index < array.length; index = index + 1){
  if(array[index] % 3 !== 0 && array[index] % 5 !== 0){
    arrayDeStrings.push("bug!");
  }
  else if(array[index] % 3 === 0 && array[index] % 5 === 0){
    arrayDeStrings.push("fizzBuzz");
  }
  else if(array[index] % 3 === 0){
    arrayDeStrings.push("fizz");
  }
  else if(array[index] % 5 === 0){
    arrayDeStrings.push("buzz")
  }
}
return arrayDeStrings
}


// Desafio 9
function encode(word) {
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  arrayWord = word.split("");
  for(let index = 0; index < arrayWord.length; index = index +1){
    for(let index2 in vogais){
      if(index2 === arrayWord[index]){
        arrayWord[index] = vogais[index2]
      }
    }
  }
  return arrayWord.join("")
}

function decode(word) {
  let numeros = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  let arrayWord = word.split("");
  for(let index = 0; index < arrayWord.length; index = index +1){
    for(let index2 in numeros){
      if(index2 === arrayWord[index]){
        arrayWord[index] = numeros[index2]
      }
    }
  }
  return arrayWord.join("")
}
console.log(decode("h3 th2r2"))

// Desafio 10
function techList(array, word) {
  if(array.length === 0){
    return 'Vazio!'
  }
  let arrayOrdenado = array.sort();
  let listaDeTecnologias = [];
  for(let index = 0; index < arrayOrdenado.length; index = index + 1){
    let objeto = {};
    objeto.tech = arrayOrdenado[index];
    objeto.name = word;
    listaDeTecnologias.push(objeto)
  }
  return listaDeTecnologias
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
