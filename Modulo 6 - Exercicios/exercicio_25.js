//* Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop;
//! Além disso imprima somente os números pares no console;

/* function decrementaPar(num) {
    while(num > 0) {
    if(num % 2 == 0) {
        console.log(num);
        }
        num -= 1;
    }
} */

//! Resolução do professor:
    function decrementaPar(num) {
        for(let i = num; i >= 0; i--) {
            if(i % 2 == 0) {
                console.log(i);
            }
        }
    }


console.log(decrementaPar(20));