// checando os tipos das variáveis

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail)

// Crie uma constante chamada base e atribua a ela o valor 5.

const base = 5;

// Crie uma constante uma chamada heigth e atribua a ela o valor 8.

const heigth = 8;

// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela heigth. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!

const area = base * heigth;
console.log(area)

// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

const perimeter = 2*base + 2*heigth;
console.log(perimeter)

// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100

const nota = 60;

// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
  //Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!”
  //Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
  //Se a nota for menor que 60, imprima “Você foi reprovada(o)”
  if(nota >=80){
    console.log("Parabéns, você foi aprovado(a)!")
  }
  else if(nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera")
  }
  else{
    console.log("Você foi reprovado(a)!")
  }



    // Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada'; Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens: Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”. Caso 'lista', imprima “Você está na nossa lista de espera”. Caso 'reprovada', imprima “Você foi reprovada(o)”. Caso default, imprima a mensagem de “Informação incorreta”.

    let statusConcurso = "aprovada";
    switch (statusConcurso){
      case "aprovada":
        console.log("Parabéns, você foi aprovado(a)!")
        break;
      case "lista":
        console.log("Você está em nossa lista de espera!")
        break
      case "reprovada":
        console.log("Você foi reprovado(a)")
        break
      default:
        console.log("informação incorreta")
    }