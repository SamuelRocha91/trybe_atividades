let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log()

for(let index = 0; index < numbers.length; index = index + 1){
  console.log(numbers[index])
}

// Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for(let index = 0; index < numbers.length; index = index + 1){
  soma = soma + numbers[index]
}
console.log(`A soma dos elementos do array numbers é igual a ${soma}`)

//Calcule e imprima a média aritmética dos valores contidos no array;

media = soma / numbers.length
console.log(`A média aritmética do array numbers é igual a ${media}`)