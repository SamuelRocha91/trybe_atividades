  //Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: Porcentagem >= 90 -> A; Porcentagem >= 80 -> B; Porcentagem >= 70 -> C; Porcentagem >= 60 -> D; Porcentagem >= 50 -> E; Porcentagem < 50 -> F. O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
  const nota = 7.8;
  const percentual = nota * 10;
  
  if(percentual > 100 || percentual < 0){
    console.log("erro")
  } else{
      if(percentual >= 90){
        console.log("NOTA A")
      }
      else if(percentual >= 80){
        console.log("NOTA B");
      }
      else if(percentual >= 70){
        console.log('NOTA C')
      }
      else if(percentual >= 60){
        console.log("NOTA D")
      }
      else if(percentual >= 50){
      console.log("NOTA E")
      }
      else{
        console.log("NOTA F")
      }
  }

