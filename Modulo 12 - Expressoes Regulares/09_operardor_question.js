//! Operador question

//* Faz com que o dígito anterior seja opcional;

const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));


const padrao2 = /\d+\w?/; //padrao aceita dígito ou caracteres (alpha-numerico)

console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123a "));