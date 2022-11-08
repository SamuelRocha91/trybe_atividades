import './style.css';
import validator from 'validator';

const button = document.querySelector('button');
const h2 = document.querySelector('h2');
const input = document.querySelector('input');
const select = document.querySelector('select');

/* validator.isAlpha() // para ver se só tem letra
validator.isBoolean() // para ver se é um booleano
validator.isCurrency() // para ver se é moeda válida
validator.isEmail() // para ver se é um email
validator.isEmpty() // checa se o campo está vazio
validator.isLowercase() // checa se é tudo minúsculo;
validator.isMobilePhone() // checa se é um número de telefone
validator.isURL() // se é uma url */

button.addEventListener('click', (event) => {
  event.preventDefault();
  const opcaoValor = select.options[select.selectedIndex].value;
  if (validator[opcaoValor](input.value)) {
    h2.innerText = 'Parabéns! Validação feita com sucesso';
  } else {
    h2.innerText = 'Erro de validação';
  }
});
