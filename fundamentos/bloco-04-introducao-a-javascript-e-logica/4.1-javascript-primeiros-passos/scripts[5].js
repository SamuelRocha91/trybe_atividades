    // Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    // Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    // Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
    // Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    // Exemplo: bishop (bispo) -> diagonals (diagonais)

    const peca = "PEAO";

    switch (peca.toLowerCase()){
        case "bispo":
            console.log("Diagonais");
            break;
        case "dama":
            console.log("Todos os lados")
            break;
        case "rei":
            console.log("Um movimento em qualquer direção")
            break;
        case "torre":
            console.log("Lados, frente ou para trás")
            break;
        case "cavalo":
            console.log("movimento em L")
            break;
        case "peao":
            console.log("um movimento")
            break;
        default:
        console.log("erro!")
    }