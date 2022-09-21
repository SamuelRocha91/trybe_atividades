  // Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.

  const custo = 300;
  const custoTotal = custo + (20*custo)/100;
  const valorVenda = 200
  const qtdeDeSaida = 1000;
  const lucro = qtdeDeSaida * (valorVenda - custoTotal);
  const valorEntrada = custo >= 0 && valorVenda >= 0
  
  if(valorEntrada === false){
    console.log("erro")
  }
  else{
    if(lucro > 0){
      console.log(`A empresa teve um lucro de R$${lucro}`)
    }
    else{
      console.log(`A empresa teve um prejuízo de R$${lucro}`)
    }
  }