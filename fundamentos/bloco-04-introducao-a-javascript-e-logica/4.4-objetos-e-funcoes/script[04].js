/* (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. */

let algarismosRomanos = {
 I: 1,
 IV: 4,
 V: 5,
 IX: 9,
 X: 10,
 XL: 40,
 L: 50,
 XC:90,
 C: 100,
 CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
}
function conversorDeRomanos(string){
let sum = 0;
let wikipedia = [];
let termo = 0;
for(let index = 0; index < string.length; index = index + 1){
wikipedia.push(algarismosRomanos[string[index]])
}  
for(let index = string.length -1; index >= 0; index= index - 1){
    if( wikipedia[index] >= termo){
      sum = sum + wikipedia[index];
    }
    else{
      sum = sum - wikipedia[index];
    }
    termo = wikipedia[index]
  }
  return sum
}
console.log(conversorDeRomanos("CDXI"))
 