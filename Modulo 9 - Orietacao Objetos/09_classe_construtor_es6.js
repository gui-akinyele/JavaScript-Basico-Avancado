//! Construtor na classe (ES6)

//* Com a versão do ES6, uma possibilidade de cirar uma classe (objeto) com construtor foi adicionada;
//* Então não precisamos mais criar por meio de uma função;

class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 4, 'amarela');

console.log(labrador);