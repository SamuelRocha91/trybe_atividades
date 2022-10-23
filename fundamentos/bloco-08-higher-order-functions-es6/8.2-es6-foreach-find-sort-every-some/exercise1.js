const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
   const object = books.find(element => element.author.birthYear === 1947);
   return object.author.name
}
console.log(authorBornIn1947())

// Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook;
  let menorBook = books[0].name.length;
  books.forEach((element) => {
    const tamName = element.name.length;
   if (menorBook > tamName) {
    menorBook = tamName
    nameBook = element.name
   } 
  })
  return console.log(nameBook)
}

smallerName()

// Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
 
  const object = books.find(element => element.name.length === 26);
  return object.name
}
console.log(getNamedBook())

// Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  const order = books.sort((a,b) =>  a.releaseYear > b.releaseYear ? -1 : 1)
  return order
}
console.log(booksOrderedByReleaseYearDesc())

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  const validation = books.every((element) => {
    const birthYear = element.author.birthYear;
    return birthYear > 1901 && birthYear < 2000; 
  })
  return validation
}
console.log(everyoneWasBornOnSecXX())

/* Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário. */

function someBookWasReleaseOnThe80s() {
  return books.some(element => {
    const livroLan = element.releaseYear;
    return livroLan >= 1980 && livroLan < 1990;
  })
}

console.log(someBookWasReleaseOnThe80s())

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário. every
const expectedResult = false;

function authorUnique() {
  return books.every(element => {
    const birthYear = element.author.birthYear;
    const autor = element.author.name
    return books.every( element2 => {
      if(autor !== element2.author.name) {
        return birthYear !== element2.author.birthYear;
      }
      return true
    })
  })
}
console.log(authorUnique())