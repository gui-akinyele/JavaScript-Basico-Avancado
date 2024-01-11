//! Exercicio 04

//* Crie uma regex que valide endereços de IP;
//* Exemplo: 127.0.01;

const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test("127.0.0.1"));
console.log(validarIp.test("8.8.8.8"));
console.log(validarIp.test("192.168.0.62"));

console.log(validarIp.test("192.168.0"));
console.log(validarIp.test("192"));
console.log(validarIp.test("adadada"));
console.log(validarIp.test("192168062"));
console.log(validarIp.test("1924.1648.04.62444"));