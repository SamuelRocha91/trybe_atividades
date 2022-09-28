/* Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.

Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função. */

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
let arrayPares = [];

function arrayOfNumbers(array){
for (let index = 0; index < vector.length; index = index + 1){
  let intermediario = vector[index]
  for(let value of intermediario){
    if(value % 2 === 0){
      arrayPares.push(value)
    }
  }
}
return arrayPares
}
console.log(arrayOfNumbers(vector))