//! Exercicio 10

//* Crie um objeto calculadora;
//* Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
//* Os métodos só devem aceitar dois parâmetros;
//* Utilize cada um dos métodos e imprima os valores no console;

const calculadora = {
   soma: function soma(a, b){
        return a+b
    },
    subtrair: function subtrair(a, b){
        return a-b
    },
    dividir: function dividir(a, b){
        return a/b
    },
    multiplicar: function mutiplicar(a, b){
        return a*b
    }
};

console.log(calculadora.soma(50,5));
console.log(calculadora.subtrair(50,5));
console.log(calculadora.dividir(50,5));
console.log(calculadora.multiplicar(50,5));