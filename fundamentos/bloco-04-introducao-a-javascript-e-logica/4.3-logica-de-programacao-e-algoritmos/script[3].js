/* Agora inverta o lado do triângulo.
 */
let n = 5;

for(let contador = 1; contador <= n; contador = contador + 1){
    let asterisco = "";
    for(let index = 1; index <= n; index = index + 1){
      if(contador >= 6 - index){
        asterisco = asterisco + "*";
    }
    else{
      asterisco = asterisco + " ";
    }
    }
    console.log(asterisco)
  }

    /* Depois, faça uma pirâmide com n asteriscos de base */
    let position = n / 2 + 0.5

    for(let cont = 0; cont < n / 2 + 0.5; cont = cont + 1){
      let asterisco = "";
      for( let index = 1; index <= n; index = index + 1){
        if( index === position ) {
          asterisco = asterisco + "*";
        }
        else if(index <= position + cont && index >= position - cont){
          asterisco = asterisco + "*";
         }
         else{
          asterisco = asterisco + " ";
         } 
      }
      console.log(asterisco)
    }