//! Mais sobre Métodos

//* Normalmente os métodos interagem com os objetos;
//* Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido;

let pessoa = {
    nome: '',
    setNome: function(novoNome) {
        this.nome = novoNome;
    },
    getNome: function() {
        return "Meu nome é " + this.nome;
    }
}

pessoa.setNome("Gui");
console.log(pessoa.getNome());