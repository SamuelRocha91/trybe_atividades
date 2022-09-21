    // Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

    const a = 5;
    const b = 12;
    const c = 7;

    if(a > b && a > c){
        console.log(`${a} é o maior dos três números`)
    }
    else if(b > a && b > c){
        console.log(`${b} é o maior dos três números`)
    }
    else{
        console.log(`${c} é o maior dos três números`)
    }