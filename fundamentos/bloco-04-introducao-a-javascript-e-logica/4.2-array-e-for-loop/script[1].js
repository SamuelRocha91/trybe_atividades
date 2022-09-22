let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordene o array numbers em ordem crescente e imprima seus valores;

let intermediario = 0;
  for(let index = 0; index < (numbers.length - 1) ; index = index + 1){

    for(let contador = index + 1; contador < numbers.length; contador = contador + 1){
      if(numbers[index] > numbers[contador]){
        intermediario = numbers[index];
        numbers[index] = numbers[contador];
        numbers[contador] = intermediario;
      }
    }
  }
  console.log(numbers)