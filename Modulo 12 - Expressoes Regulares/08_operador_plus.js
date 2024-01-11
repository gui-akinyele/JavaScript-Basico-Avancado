//! Operador plus +
//* Quando um + esta após alguma expressão, este elemtento pode se repetir mais de uma vez;

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("asdasfa"));