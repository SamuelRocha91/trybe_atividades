// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  let result = '';
  let guardaId = '';
  for(let index = 0; index < professionalBoard.length; index += 1) {
    if(professionalBoard[index].id === id){
      result = professionalBoard[index][detail];
      guardaId = id;
    } 
  } 
   if (result !== undefined && result.length !== 0) {
    return result
   } else if (guardaId.length === 0) {
    throw new Error ('ID não identificada')
   } else {
    throw new Error('Informação indisponível')
   }  
};

module.exports = searchEmployee;