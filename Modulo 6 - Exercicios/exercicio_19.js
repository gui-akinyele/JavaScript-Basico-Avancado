//* Escreva uma função que retorne um número aleatório;
//* O número máximo retornado deve ser passado via parâmetro;
//! Utilize Math.random();


function numAleatorio (num) {
    return Math.floor(Math.random() * num) + 1;

}

console.log(numAleatorio(10));
console.log(numAleatorio(100));
console.log(numAleatorio(150));