//! Choice patterm

//* Podemos colocar uma istrução na regex que funciona como um || (or) das condicionais;

const reg = /\w+: (Mateus|João|Maria)/; //nome: jajajaj

console.log(reg.test("Nome: Mateus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));


