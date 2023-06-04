//! Exercicio 06

//* Crie dois arrays, um com mais de 5 elementos e outro com menos;
//* Faça uma função que verifica o número de elementos;
//* Se possuir menos que 5, imprima "Poucos elementos" no console;
//* Se tiver mais, imprima "Muitos elementos";

let arr1 = [10, 20, 30, 40, 50, 60];
let arr2 = [7, 8, 9];

function verificaArray(arr) {
    if (arr.length >= 5) {
        console.log('Muitos elementos');
    } else {
        console.log('Poucos elementos')
    }
}

verificaArray(arr1);
verificaArray(arr2);