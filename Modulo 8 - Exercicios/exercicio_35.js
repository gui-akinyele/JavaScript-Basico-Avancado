//! Exercicio 10

//* Crie um objeto calculadora;
//* Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
//* Os métodos só devem aceitar dois parâmetros;
//* Utilize cada um dos métodos e imprima os valores no console;

const calculadora = {
   soma: function soma(a, b){
        console.log(a+b)
    },
    subtrair: function subtrair(a, b){
        console.log(a-b)
    },
    dividir: function dividir(a, b){
        console.log(a/b)
    },
    multiplicar: function mutiplicar(a, b){
        console.log(a*b)
    }
};

calculadora.soma(50,5);
calculadora.subtrair(50,5);
calculadora.dividir(50,5);
calculadora.multiplicar(50,5);