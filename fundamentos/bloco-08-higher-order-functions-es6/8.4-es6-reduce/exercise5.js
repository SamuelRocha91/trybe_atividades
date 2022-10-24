const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => {
    const compara = curr.toLowerCase().split('');
    compara.forEach( (element) => {
      if (element === 'a'){
          acc += 1;
      }
    })
    return acc
  }, 0)
  x
}
console.log(containsA())