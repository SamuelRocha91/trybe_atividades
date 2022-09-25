let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
/* 
Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. */

console.log(`Seja bem-vida, ${info.personagem}`)

/* Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. */

info.recorrente = "sim";
console.log(info)

/* Faça um for/in que mostre todas as chaves do objeto */

for(let index in info){
  console.log(index)
}

/* Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto */

for(let index in info){
  console.log(info[index])
}

/* Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves */

let info2 = {
  personagem: "tio patinhas",
  origem: "christmas on Bear Mountain, Dell's FOur Color COmics #178",
  nota: "O último Macpatinhas",
  recorrente: "sim"
}
for(let index in info){
  if(info[index] !== info2[index]){
    console.log(`${info[index]} e ${info2[index]}`)
  }
  else{
    console.log(`Ambos recorrentes`)
  }
}

/* Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’” */

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`)