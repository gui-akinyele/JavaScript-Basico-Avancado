//* Mais sobre Arrow Functions

// Se só tem um parâmetro podemos remover os parênteses do argumento e o return;
// Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código;

const potencia = (x) => {
    return x * x;
}

console.log(potencia(2));



const potencia2 = n => n * n;

console.log(potencia2(4));