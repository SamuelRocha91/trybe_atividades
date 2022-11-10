import './style.css'

const BASE_URL = 'https://api.exchangerate.host/latest'

const h3 = document.querySelector('h3');
const section = document.querySelector('section')
const value = document.querySelector('input')
const button = document.querySelector('button')

const createUrl = (moeda) => `${BASE_URL}?base=${moeda.toUpperCase()}`;
const limpezaGeral = () => {
  const children = section.children;
  console.log(children)
  if(children.length !== 0) {
    for (let index = 0; index <= children.length; index += 1) {
  section.removeChild(children[index])
}
  }
}
const fetchMoeda = (event) => {
  event.preventDefault();
  limpezaGeral();
  const url = createUrl(value.value);
  console.log(url)
  fetch(url).then((response) => response.json())
  .then((data) =>  {
    h3.innerText = `Valores referentes a 1 ${value.value.toUpperCase()}`
    const {rates} = data;
    Object.entries(rates).map((array) => {
      const div = document.createElement('div');
      div.innerText = `${array[0]} ${array[1]}`
      div.style.width = '155px';
      div.style.height = '44px'
      div.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      div.style.borderRadius = '5px';
      div.style.fontSize = '13px';
      div.style.margin = '4px';
      div.style.color = 'gold';
      div.style.textAlign = 'center'
      section.appendChild(div)
    })
  })
}

button.addEventListener('click', fetchMoeda)
