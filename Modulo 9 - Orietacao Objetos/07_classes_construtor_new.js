//! Classes: construtor por função

//* CEm muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS também;

function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;

    this.uivar = function() {
        console.log("Auuuuuu");
    }
}

let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();