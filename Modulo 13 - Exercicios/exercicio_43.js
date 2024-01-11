//! Exercicio 03

//* Crie uma regex que aceite a seguinte expressão "Marca: nomeDaMarca";
//* Onde o nomeDaMarca pode variar para Nike, Adidas, Puma, Asics;

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: Fila"));
console.log(validaMarca.test("Marca: "));
console.log(validaMarca.test("Nike"));
console.log(validaMarca.test("1234"));



