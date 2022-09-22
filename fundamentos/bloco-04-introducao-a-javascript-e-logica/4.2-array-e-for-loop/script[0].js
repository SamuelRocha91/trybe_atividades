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

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if(media > 20){
  console.log("valor maior que 20");
}
else{
  console.log("valor menor ou igual a 20")
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for(let index = 0; index < numbers.length; index = index + 1){
  if(maior < numbers[index]){
    maior = numbers[index];
  }
}
console.log(maior)