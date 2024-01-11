//! Prática Validando data de nascimento

//*Podemos validar uma data de nascimento da seguinte forma

const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2024]{4}/;

console.log(validarDataNasc.test('05/02/2010'));
console.log(validarDataNasc.test('5/2/2010'));
console.log(validarDataNasc.test('05-02-2010'));
console.log(validarDataNasc.test('05/02/10'));
console.log(validarDataNasc.test('99/02/2010'));

