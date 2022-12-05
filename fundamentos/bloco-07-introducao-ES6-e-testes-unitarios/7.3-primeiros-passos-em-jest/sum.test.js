const {sum, myRemove, myFizzBuzz, encode, decode} = require('./sum');

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

describe('Requisito 03', () => {
  test('testa se ao passar o parâmetro 15 a função retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  test('testa se ao passar o parâmetro 6 a função retorna fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz')
  })
  test('testa se ao passar o parâmetro 10 a função retorna buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })
  test('testa se ao passar o parâmetro 11 a função retorna 11', () => {
    expect(myFizzBuzz(11)).toBe(11)
  })
  test('testa se ao passar o parâmetro "a" a função retorna "false"', () => {
    expect(myFizzBuzz('a')).toBe(false)
  })
})

describe('Requisito 04', () => {
  test('verifica se encode e decode são funções existentes', () => {
    expect(typeof encode && typeof decode).toBe('function')
  })
  test('verifica se encode ao receber "aeiou" retorna "12345"', () => {
    expect(encode('aeiou')).toBe('12345')
  })
  test('verifica se decode ao receber "12345" retorna "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou')
  })
  test('verifica se decode ao receber "6789" retorna "6789"', () => {
    expect(decode('6789')).toBe('6789')
  })
  test('verifica se encode ao receber "snts" retorna "snts"', () => {
    expect(encode('snts')).toBe('snts')
  })
  test('verifica se a string passada pela função possui o mesmo número de caracteres do retorno', () => {
    expect(encode('samuel').length).toBe(6)
  })
})