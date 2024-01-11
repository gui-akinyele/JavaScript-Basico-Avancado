//! Verificando padrões com regex

//* Depois da definição do padrão por meio da regex;
//* Utilizamos o método test() para verificar se o padrão é retornado;
//* Com isso vamos receber de resposta true or false;

const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

console.log(reg2.test("TEm bola?"));
console.log(reg2.test("Não tem"));

let text = "Tem bola na cesta!";

console.log(reg2.test(text));

console.log(/quadrado/.test("Tem um quadrado"));