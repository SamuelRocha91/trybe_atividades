let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

/* Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”. */

console.log("O morador do bloco dois de nome " + moradores.blocoDois[1].nome + " " + moradores.blocoDois[1].sobrenome + "mora no " + moradores.blocoDois[1].andar + "º andar, apartamento " + moradores.blocoDois[1].apartamento + ".")

/* Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2 */

for(let index = 0; index < moradores.blocoUm.length; index = index + 1){
  let firstname = "";
  let secondName ="";
  for(let cont in moradores.blocoUm[index]){
    if(cont === "nome" && firstname === ""){
      firstname = moradores.blocoUm[index][cont];
    }
    if(cont === "sobrenome" && secondName === ""){
      secondName = moradores.blocoUm[index][cont]
    }
} 
  console.log(firstname + " " + secondName)
}

for(let index = 0; index < moradores.blocoDois.length; index = index + 1){
  let firstname = "";
  let secondName ="";
  for(let cont in moradores.blocoDois[index]){
    if(cont === "nome" && firstname === ""){
      firstname = moradores.blocoDois[index][cont];
    }
    if(cont === "sobrenome" && secondName === ""){
      secondName = moradores.blocoDois[index][cont]
    }
} 
  console.log(firstname + " " + secondName)
}