const checkin = document.querySelector('.inputCheckin');
const checkout = document.querySelector('.inputCheckout');
const bedroom = document.querySelectorAll('.bedroom');
const select = document.querySelector('.nPessoas');
const textArea = document.querySelector('.obs');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');
console.log(select)

btnClear.addEventListener('click', function(event) {
  event.preventDefault();
  checkin.value ="";
  checkout.value = "";
  textArea.value = "";
  const input = document.querySelectorAll('input')
  for (let index = 0; index < input.length; index = index + 1) {
    input[index].checked = false;
  }
})
btnSubmit.addEventListener('click', function(event) {
  event.preventDefault();
  const li = document.createElement('li');
  const dataEntrada = getData(checkin.value);
  const dataSaida = getData(checkout.value)
  
  const quarto = getQuarto()
  console.log(quarto)
  const pessoas = getPessoas()
  const obs = textArea.value;
  li.innerText = `Reserva para o dia ${dataEntrada} até o dia ${dataSaida} Quarto ${quarto} - Para  ${pessoas} - Obs: ${obs}`;
  ol.appendChild(li)
})

function getQuarto() {
  for (let i = 0; i < bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPessoas() {
  return select.options[select.selectedIndex].value;
}


function getData(value) {
  const valueDate = value + 'T03:00:00.000Z';
  data = new Date(valueDate);
  dataFormatada = data.toLocaleDateString('pt-BR');
  return dataFormatada;
}