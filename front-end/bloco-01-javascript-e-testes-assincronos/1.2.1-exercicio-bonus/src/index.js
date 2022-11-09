import './style.css'

const dog = document.getElementById('premier');
const cat = document.getElementById('second');
const surprise = document.getElementById('third');
const img = document.querySelector('img')

dog.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json()).then((data) => img.src = data.message)
})
cat.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow').then((response) => response.json()).then((data) => img.src = data.file)
})

surprise.addEventListener('click', () => {
  const dogPromise = fetch('https://dog.ceo/api/breeds/image/random')
  const catPromise = fetch('https://aws.random.cat/meow')
  Promise.any([
    dogPromise,
    catPromise
  ]).then((result) => result.json()).then((data) => {
    data.file === 'undefined' ? img.src = data.message : img.src = data.file
  })
})