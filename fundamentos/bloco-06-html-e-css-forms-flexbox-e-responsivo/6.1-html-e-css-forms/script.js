const button = document.getElementById('input-button');
const textao = document.getElementById('input-text');
const ol = document.querySelector('ol');
const name = document.getElementById('input-name');
const email = document.getElementById('input-email');
const usoimg = document.getElementById('input-imagem');
button.addEventListener('click', function(event) {
  event.preventDefault();
  const validName = name.value.length >= 10 && name.value.length <= 40;
  const validacao = validName
  if(validacao){
    alert('Dados enviados com sucesso')
  }else{
    alert('Dados inválidos!')
  }
})
const limpar = document.getElementById('limpar');
const yes = document.getElementById('yes');
yes.addEventListener('change', function() {
  if(limpar.disabled){
limpar.disabled = !yes.checked;
  }else {
    limpar.disabled 
  }
})
