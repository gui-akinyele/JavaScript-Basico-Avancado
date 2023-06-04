//! Exercicio 04

//* Adicione a propriedade janelas no ônibus, com o valor de 20;
//* Delete a propriedade rodas;

//!  Imprima a propriedade janelas no console;

let onibus = {
    rodas: 4,
    passageiros: 40,
    portas: 2
};

console.log(onibus);

delete onibus.rodas;

console.log(onibus.rodas);

onibus.janelas = 20;

console.log(onibus);
console.log(onibus.janelas);