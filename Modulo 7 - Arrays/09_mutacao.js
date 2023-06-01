//! Mutação (Mutability)

//* Um objeto pode herdar todas as caracteríticas do outro, virando uma referência ao mesmo;

let objetoA = {
    pontos: 10
};

objetoB = objetoA;

let objetoC = {
    pontos: 10
};

console.log(objetoA == objetoB); //true
console.log(objetoA == objetoC); //false


let pessoa = {
    nome: "Guilherme"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = 'Guigui';

console.log(pessoa.nome);

pessoa.nome = 'Guiguizin';

console.log(pessoa2.nome);