const hydrate = (frase) => {
  const array = frase.split(' ')
  let total = 0;
  array.forEach((element) => {
    let inteiro = parseInt(element);
    if (typeof inteiro === 'number' && !isNaN(inteiro)) {
      total += inteiro;
    }
  });
 return   total > 1 ?  `${total} copos de água` : '1 copo de água'
};
module.exports = hydrate;
