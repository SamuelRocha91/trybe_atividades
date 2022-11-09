import Swal from 'sweetalert2'
import './style.css'

const img = document.querySelector('img');
const p = document.querySelector('p');
const button = document.querySelector('button');
const BASE_URL = 'https://superheroapi.com/api/access-token/character-'

const generateNumber = () => Math.round(Math.random() * 600);

button.addEventListener('click', () => {
  const randomNumber = generateNumber();
  fetch(`${BASE_URL}${randomNumber}`).then((response) => console.log(response.json()))
  .then((data) => {
    img.src = data.image.url;
    p.innerText = data.name;
  })
  .catch((erro) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${erro.message}`
    })
  })
})
