//! Exercicio 01

//* Crie uma regex que aceite só letras maiúsculas;

const validarMaiuscula = /[A-Z]/;

console.log(validarMaiuscula.test("testando"));
console.log(validarMaiuscula.test("TESTE"));
console.log(validarMaiuscula.test("1234"));
console.log(validarMaiuscula.test("Testando"));