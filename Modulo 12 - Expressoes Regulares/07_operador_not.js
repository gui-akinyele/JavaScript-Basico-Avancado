//! Operador not^

//* Podemos escrever um set que aceita tudo, menos alguns caracteres como o not;
//* Lembrando que combinações serão aceitas, o negado é apenas se bate com o set;
// Iremos aprender outras formas de negar

const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("asd"));
console.log(nottoaz.test("123 as"));