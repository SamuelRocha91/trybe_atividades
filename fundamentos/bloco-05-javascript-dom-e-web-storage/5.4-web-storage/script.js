
const corDeFundo = document.getElementById("bgcolor");

const body = document.body;
const colorB = document.querySelector("body")
corDeFundo.addEventListener("click", function(evento){
  let corUsada = evento.target;
  colorB.style.backgroundColor = corUsada.value;
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


const button = document.querySelector("#btn-preferencias");
button.addEventListener('click', function(evento){
  evento.preventDefault()

  console.log(colorB)
  let preferences = JSON.parse(localStorage.getItem('config')) || [];
  let config = {
    bgcolor: colorB.style.backgroundColor,
    fontSyze: tamanhoFonte.value,
    color: cor.value,
    lines: linhas.value,
    font: fonte.value,
  }

  preferences[0] = config;

  localStorage.setItem('config', JSON.stringify(preferences))

  fonte.value = "";
  linhas.value ="";
  cor.value = "";
  tamanhoFonte.value = "";
  corDeFundo.checked = false;

})

window.onload = carregamento

function carregamento(){
  let preferences = JSON.parse(localStorage.getItem("config")) || [];
  body.style.fontFamily = preferences[0]['font'];
  body.style.color = preferences[0]['color'];
  body.style.lineHeight = `${preferences[0]['lines']}px`;
  body.style.backgroundColor = preferences[0]['bgcolor']
  if(preferences[0]['fontSyze'] === "media"){
    body.style.fontSize = "medium";
  }  if(preferences[0]['fontSyze'] === "grande"){
  body.style.fontSize = "larger"
  }
  else if(preferences[0]['fontSyze'] === "pequena"){
  body.style.fontSize = "small";
   }
}