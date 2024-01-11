//! Exercicio 02

//* Crie uma regex que só aceite strings terminadas com ID;

const validarId = /\d+ID\b/;

console.log(validarId.test("1234567ID"));
console.log(validarId.test("1234567"));
console.log(validarId.test("asdasdad"));
console.log(validarId.test("asdasdaID"));
console.log(validarId.test("ID"));




