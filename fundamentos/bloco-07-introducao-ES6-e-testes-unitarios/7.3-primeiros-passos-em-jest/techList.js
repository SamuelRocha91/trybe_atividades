const techList = (array, texto) => {
  const newArray = array.sort();
  if (array.length === 0) {
    return 'Vazio!'
  }
  const arrayObjeto = [] ;

  for(let index = 0; index < array.length; index += 1) {
    arrayObjeto.push({name: texto, tech: newArray[index]}) 
  }
  return arrayObjeto
}

console.log(techList([], 'Lucas'))

module.exports = techList;

