
const corDeFundo = document.getElementById("bgcolor");

const body = document.body;

corDeFundo.addEventListener("click", function(evento){
  let corUsada = evento.target;
  console.log(corUsada)
  body.style.backgroundColor = corUsada.value
})

const tamanhoFonte = document.getElementById("fontSize");
tamanhoFonte.addEventListener("change", function(){
  if(tamanhoFonte.value === "pequena"){
    body.style.fontSize = "small"
  }
  else if(tamanhoFonte.value === "media"){
    body.style.fontSize = "medium";
  }
  else if(tamanhoFonte.value === "grande"){
    body.style.fontSize = "larger";
  }else{
    body.style.fontSize = "18px";
  }
})

const cor = document.getElementById("color");
cor.addEventListener("keyup", function(){
  body.style.color = cor.value
})

const linhas = document.getElementById("lines");
linhas.addEventListener("change", function(){
  body.style.lineHeight = `${linhas.value}px`
})

const fonte = document.getElementById("font");
fonte.addEventListener("keyup", function(){
  body.style.fontFamily = fonte.value
})


const botao = document.getElementById("btn-preferencias");
botao.addEventListener('click', function(){

})
