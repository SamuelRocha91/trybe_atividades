const {sum, myRemove} = require('./sum');

describe('Requisito 01', () => {
  test('testa se 4 mais 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  test('testa se 0 mais 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  test(`testa se ao lançar 4 mais '5' a função retorna um erro`, () => {
    expect(() => sum(4, '5')).toThrow();
  })
  test(`testa se ao lançar 4 mais '5' a função retorna um erro específico`, () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  })
})


describe('Requisito 02', () => {
  test('testa se ao passar o array [1, 2, 3, 4] e o item 3 o retorno será de [1,2,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
  })
  test('testa se ao passar o array [1, 2, 3, 4] e o item 3 o retorno  não será de [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4])
  })
  test('testa se ao passar o array [1, 2, 3, 4] e o item 5 se o retorno será de [1,2,3,4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4])
  })
})