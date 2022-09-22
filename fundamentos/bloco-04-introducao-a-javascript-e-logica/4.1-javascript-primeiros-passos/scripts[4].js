    // Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

    let angulo1 = 60;
    let angulo2 = 90;
    let angulo3 = 0;
    let trianguloValido = angulo1 >0 && angulo2 >0 && angulo3 >0;
    if(trianguloValido === false){
        console.log("erro!")
    }
    else{
        if( angulo1 + angulo2 + angulo3 === 180){
            console.log("true")
        }else{
            console.log("false")
        }
    }