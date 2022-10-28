const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
    // bornIn: nascido em
];

// escreva filterPeople abaixo
/* const filterPeople = () => {
 const filtro = people.filter((elemento) => {
  return elemento.nationality === 'Australian' && elemento.bornIn > 1900 && elemento.bornIn < 2001;
 }).map( elemento => elemento.name)
return filtro
}
console.log(filterPeople()) */

// maneira 02

const filterPeople = () => {
  const filtro = people.filter(({ bornIn, nationality}) => {
    return nationality === 'Australian' && bornIn > 1900 && bornIn < 2001;
  }).map( elemento => elemento.name)
 return filtro
 }
 console.log(filterPeople())