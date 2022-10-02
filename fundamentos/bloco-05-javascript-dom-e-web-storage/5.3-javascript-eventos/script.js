function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; 
let days = document.getElementById("days")
days.id = "days"


function resetDays(){
  let filhinhos = days.children;
  let position = filhinhos.length
  for(let index = position - 1; index >= 0; index= index -1){
    filhinhos[index].remove()
  }
}

function createDays(){
  for(let index = 0; index < decemberDaysList.length; index = index + 1){
    let itens = document.createElement("li");
    itens.innerHTML = decemberDaysList[index];
    itens.className = 'day';
    if(itens.innerHTML === '24' || itens.innerHTML === '25' || itens.innerHTML === '31'){
      itens.className += " holiday";
    }
    if(itens.innerHTML === '4' || itens.innerHTML === '11' || itens.innerHTML === '18' || itens.innerHTML === '25'){
      itens.className += " friday";
    }
    days.appendChild(itens)
  }
}
createDays()


const divButton = document.querySelector(".buttons-container")

function createButton(string){
  let button = document.createElement("button");
  button.innerText = string;
  button.id = "btn-holiday"
  divButton.appendChild(button)
}
createButton("Feriados")


let button = document.getElementById("btn-holiday");
let feriados = document.getElementsByClassName("holiday");
let click = "impar";

button.addEventListener("click", function(){
 for(let index = 0; index < feriados.length; index = index + 1){
  if(click === "impar"){
    feriados[index].style.backgroundColor = "blue";
  }
  else{
    feriados[index].style.backgroundColor = "rgb(238,238,238";
  }
 }
 if(click === "impar"){
  click = "par";
 }else{
  click = "impar"
 }
})

function createButton2(string){
  let button = document.createElement("button");
  button.innerText = string;
  button.id = "btn-friday"
  divButton.appendChild(button)
}
createButton2("Sexta-feira")
let bool = true;

let sextou = document.getElementById("btn-friday");
sextou.addEventListener("click", function(){
  let sextas = document.getElementsByClassName("friday");
  if(bool){
  for(let index = 0; index < sextas.length; index = index + 1){
      sextas[index].innerHTML = 'cathaça!';
    }
    }else{
      resetDays()
      createDays()
    }
    if(bool === true){
      bool = false
    }else{
      bool = true
    }
  })
  let lis = document.querySelector(".days-container")
  lis.addEventListener("mouseover", function(evento){
    let dia = evento.target
    dia.style.fontSize = "40px";
  })
 lis.addEventListener("mouseout", function(evento){
    let query = evento.target;
    query.style.fontSize = "18px"
  } )

  let tarefas = document.querySelector(".my-tasks")
  function addTarefa(string){
    let span = document.createElement("span");
    span.innerText = string;
    tarefas.appendChild(span)
  }
  addTarefa("Cozinhar")


  function mudaCor(string){
    let div = document.createElement("div");
    div.className = "task"
    div.style.backgroundColor = string;
    tarefas.appendChild(div) 

  }
  mudaCor("red")

  let divLegenda = document.querySelector(".task");
  divLegenda.addEventListener("click", function(){
    if(divLegenda.className === "task"){
      divLegenda.className = "task selected"
    }
    else{
      divLegenda.className = "task"
    }
  })
  let logica = true;
  lis.addEventListener("click", function(evento){
    let reservado = evento.target
    if(divLegenda.className === "task selected" && reservado.style.backgroundColor !== divLegenda.style.backgroundColor){
      reservado.style.backgroundColor = divLegenda.style.backgroundColor;
    }else{
      reservado.style.backgroundColor = "rgb(238,238,238)"
    }

  })

  let compromissos = document.querySelector(".task-list");
  let valorReal = document.getElementById("task-input")
  let input = document.getElementById("btn-add");
  input.addEventListener("click",function(evento){
    if(valorReal.value === ""){
      alert("ERRO")
    }
    else{
      let li = document.createElement("li");
      li.innerText = valorReal.value;
      compromissos.appendChild(li)
    }
  })

  valorReal.addEventListener("keypress",function(evento){
    let tecla = evento.key;
    if(tecla === "Enter"){
    input.click()
    }
  })