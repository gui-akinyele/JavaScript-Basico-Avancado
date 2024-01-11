//!Exercicio 05

//* Crie uma regex que valide nome de usuários no sistema;
//* Aceite letras de a-z, _ e -, números de 0-9, mínimo de 3 caracteres e máximo 16;

let validaNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validaNomeUsuario.test("gui_123"));

console.log(validaNomeUsuario.test("gu"));
console.log(validaNomeUsuario.test("gui_1dasdadadadadadasdadadsas"));
