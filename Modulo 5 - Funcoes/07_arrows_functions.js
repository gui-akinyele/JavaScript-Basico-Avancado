//* Arrows Functions

// Uma outra forma de escrever funções;
// Bem utilizda nos frameworks modernos;
// Porém não deve substituir as functions por completo (veremos mais tarde os detalhes);

const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(3));


let consoleTeste = () => {
    console.log("Olá Mundo!");
};

consoleTeste();

let soma = (a,b) => {
    return a + b;
};

console.log(soma(10,20));

