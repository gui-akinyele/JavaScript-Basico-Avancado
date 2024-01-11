//! Prática: validando email

//* Podemos validar um email da seguinte forma:

const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("gui@gmail.com"));
console.log(validarEmail.test("gui@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("gui@gmail.com.br"));


