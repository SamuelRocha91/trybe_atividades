  // Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.

  const salBruto = 3000;
  let inss = null;

  if(salBruto < 1556.94){
    inss = salBruto * 0.08
  }
  else if(salBruto > 1556.94 && salBruto <= 2594.92){
    inss = salBruto * 0.09;
  }
  else if(salBruto > 2594.92 && salBruto <= 5189.82){
    inss = salBruto * 0.11;
  }
  else{
    inss = 570.88
  }
  let salBase = salBruto - inss;
  let ir = null;

  if(salBase < 1903.98){
    ir = 0;
  }
  else if(salBase > 1903.98 && salBase <= 2826.65){
    ir = 0.075 * salBase - 142.80
  }
  else if(salBase > 2826.65 && salBase <= 3751.05){
    ir = 0.15 * salBase - 354.80
  }
  else if(salBase > 3751.05 && salBase <= 4664.68){
    ir = 0.225 * salBase - 636.13;
  }
  else{
    ir = 0.275 * salBase - 869.36
  }
  let salLiquido = salBase - ir
  console.log(salLiquido)