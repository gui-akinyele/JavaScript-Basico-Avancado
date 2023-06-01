//* Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop;
//! Além disso imprima somente os números pares no console;

function decrementaPar (num) {
    while(num =! 0) {
        num --
    } if(num % 2 == 0) {
        console.log(num);
         }
}

decrementaPar(10);