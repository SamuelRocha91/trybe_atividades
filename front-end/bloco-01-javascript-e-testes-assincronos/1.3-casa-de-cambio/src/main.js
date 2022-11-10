import './style.css';
import Swal from 'sweetalert2';

const BASE_URL = 'https://api.exchangerate.host/latest';

const h3 = document.querySelector('h3');
const section = document.querySelector('section');
const value = document.querySelector('input');
const button = document.querySelector('button');

const createUrl = (moeda) => `${BASE_URL}?base=${moeda.toUpperCase()}`;
const limpezaGeral = () => {
  /* const children = section.children; */
  if (section.children.length !== 0) {
    for (let index = 0; index <= section.children.length; index += 1) {
      section.removeChild(section.children[index]);
    }
  }
};
const styleDiv = (div) => {
  div.style.width = '155px';
  div.style.height = '44px';
  div.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  div.style.borderRadius = '5px';
  div.style.fontSize = '13px';
  div.style.margin = '4px';
  div.style.color = 'gold';
  div.style.textAlign = 'center';
  return div;
};
const fetchMoeda = (event) => {
  event.preventDefault();
  limpezaGeral();
  const url = createUrl(value.value);
  if (!value.value) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você precisa passar uma moeda!',
    });
    throw new Error('Nenhuma moeda passada');
  }
  fetch(url).then((response) => response.json())
    .then((data) => {
      let sum = 0;
      Object.keys(data.rates).forEach((elemento) => {
        if (elemento === value.value.toUpperCase()) {
          sum += 1;
        }
      });
      if (sum === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Você precisa passar uma moeda válida!',
        });
        throw new Error('Moeda inválida');
      }
      h3.innerText = `Valores referentes a 1 ${value.value.toUpperCase()}`;
      const { rates } = data;
      Object.entries(rates).forEach((array) => {
        const div = document.createElement('div');
        styleDiv(div);
        div.innerText = `${array[0]} ${array[1]}`;
        section.appendChild(div);
      });
    });
};

button.addEventListener('click', fetchMoeda);
