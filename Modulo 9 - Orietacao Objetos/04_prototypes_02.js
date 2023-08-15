//! Mais sobre Prototypes

//* Quando criamos um objeto a partir de um outro, o base será prototype;
//* Ele herdará tanto os métodos e propriedades de Object (o prototyoe do objeto base;)
//* Quanto os do objeto base para este novo;


const pessoa = {
    maos: 2,
}

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);