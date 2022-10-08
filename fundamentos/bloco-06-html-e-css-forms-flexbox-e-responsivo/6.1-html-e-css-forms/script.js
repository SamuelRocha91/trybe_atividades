const button = document.getElementById('input-button');
const textao = document.getElementById('input-text');
const ol = document.querySelector('ol');
const name = document.getElementById('input-name');
const email = document.getElementById('input-email');
const usoimg = document.getElementById('input-imagem');
button.addEventListener('click', function(event) {
  event.preventDefault();
  const validName = name.value.length >= 10 && name.value.length <= 40;
  const validEmail = email.value.length >= 10 && email.value.length <= 40;
  const textArea = textao.value.length <= 500;
  const validacao = validName && validEmail && textArea
  if(validacao){
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
  }else{
    alert('Dados inválidos!')
  }
})

const teste = document.getElementById('teste');
usoimg.addEventListener('change', function() {
  
button.disabled = !usoimg.checked;
  
})
