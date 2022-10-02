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