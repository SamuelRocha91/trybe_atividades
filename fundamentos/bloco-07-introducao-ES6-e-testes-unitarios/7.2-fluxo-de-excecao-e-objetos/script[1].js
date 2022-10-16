const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
/* Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

function addTurn(objeto, chave, valor) {
  return objeto[chave] = valor
}

addTurn(lesson2,'turno','noite')
//console.log(lesson2)

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro*/
const listKeys = (objeto) => Object.keys(objeto);
//console.log(listKeys(lesson2))

/* Crie uma função para mostrar o tamanho de um objeto.
 */
const objectLength = (objeto) => Object.entries(objeto).length
//console.log(objectLength(lesson2))
/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
 */
const objectValues = (objeto) => Object.values(objeto)
//console.log(objectValues(lesson2))

/* Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3 */
const modifier1 = {};
const modifier2 = {};
const modifier3 = {};
modifier1.lesson1 = lesson1;
modifier2.lesson2 = lesson2;
modifier3.lesson3 = lesson3;
const allLessons = Object.assign({}, modifier1, modifier2, modifier3)
/* console.log(allLessons)
 */
/* Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
 */
const numStudents = (objeto) => objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes;

/* console.log(numStudents(allLessons))
 */
/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.  */
const positionKey = (objeto, numero) => Object.values(objeto)[numero];

/* console.log(positionKey(lesson1, 0))
 */
/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. */

function validation(objeto, chave, valor) {
  const arrayObject = Object.entries(objeto);
  for (let index = 0; index < arrayObject.length; index += 1) {
      if (arrayObject[index][0] === chave && arrayObject[index][1] === valor){
        return true
      }
    }
    return false
  }
  console.log(validation(lesson3, 'turno', 'noite'))
  console.log(validation(lesson3, 'materia', 'Maria Clara'))
 /*  Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática. */


  function studentMath(objeto) {
    const array = Object.entries(objeto);
    let total = 0
    for (let index in array) {
      if (array[index][1]['materia'] === 'Matemática') {
        total += array[index][1]['numeroEstudantes'];
      }
    }
    return total
  }
  console.log(studentMath(allLessons))

  /* Utilizando o objeto (allLesson), crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. */

  function relatorio(objeto, professor) {
    const objetoRelatorio = {};
    objetoRelatorio['professor'] = professor 
    const array = Object.entries(objeto);
    const aulas = [];
    let total = 0;
    for (let index in array) {
      if (array[index][1]['professor'] === professor) {
        aulas.push(array[index][1]['materia']);
        total += array[index][1]['numeroEstudantes']
      }
    }
    objetoRelatorio['aulas'] = aulas;
    objetoRelatorio['estudantes'] = total;
    return objetoRelatorio
  }
  console.log(relatorio(allLessons, 'Maria Clara'));