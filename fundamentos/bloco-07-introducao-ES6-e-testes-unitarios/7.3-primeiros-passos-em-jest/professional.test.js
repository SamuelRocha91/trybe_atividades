const searchEmployee = require('./professional.js');

describe('Testando a função searchEmployee', () => {

  test('Verfica se a função searchEmployee existe', () => {
    expect(typeof searchEmployee).toBe('function')
  })

  test('Verfica se ao receber um id específico a função retorna um dado resultado', () => {
    expect(searchEmployee('4456-4', 'firstName')).toBe('Leila')
  })

  test('Verfica se ao receber um id não existente no objeto se é lançado um erro', () => {
    expect(() => searchEmployee('4456-9', 'firstName')).toThrow('ID não identificada')
  })
  test('Verfica se ao receber uma informação não existente no objeto se é lançado um erro', () => {
    expect(() => searchEmployee('4456-4', 'ecvitoria')).toThrow('Informação indisponível')
  })
});

