//Faça um programa que diz se um número definido numa variável é primo ou não
let n = 33;
let qtadeDiv = 0;
for(let index = 1; index <= n; index = index + 1){
  if(n % index === 0){
    qtadeDiv = qtadeDiv + 1;
  }
}
if(qtadeDiv = 2){
  console.log(`${n} é um número primo`)
}
else{
  (`${n} não é um número primo`)
}

