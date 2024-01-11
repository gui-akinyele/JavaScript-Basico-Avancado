//! Conjunto de caracteres

//* Podemos definir um conjunto de caracteres para encontrar por regex;
//* Basta por entre [];
//* Com um traço podemos definir um intervalo também, veja:

const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o número 23")); //gera conflito

const reg2 = /[0-9]/;

console.log(reg1.test("Temos o número 60"));