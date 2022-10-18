const techList = (array, texto) => {
  const newArray = array.sort();
  const arrayObjeto = [] ;

  for(let index = 0; index < array.length; index += 1) {
    arrayObjeto.push({name: texto, tech: newArray[index]}) 
  }
  return arrayObjeto
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

module.exports = techList;

