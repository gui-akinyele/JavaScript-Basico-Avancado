//! Objetos

//* Uma coleção de propriedades, parecido com arrays;
//* Podemos acessar estas propriedades:

let pessoa = {
    nome: "Guilherme",
    profissao: "Desenvolvedor",
    idade: 31,
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);

let gato = {
    patas: 4,
    nome: "Salem",
    cor: "Preto",
    miar: function () {
        console.log("miau miau");

    }
}

console.log(gato.nome);
console.log(gato.cor);
gato.miar();


//! [] = array
//! {} = obj