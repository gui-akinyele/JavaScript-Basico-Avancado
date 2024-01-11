//! Ocorrência precisa

//* Inserir o número de ocorrência entre {};

const cep = /\d{5}-\d{3}/;

console.log(cep.test("88117-500"));
console.log(cep.test("asd"));
console.log(cep.test("88-500"));