//! Objetos: mais sobre objetos

//* Podemos copiar todas as propriedades de um objeto para outro;

let objetoA = {
    prop1: 'teste',
    prop2: 'testando',
}

let objetoB = {
    prop3: 'propriedade'
}

Object.assign(objetoA, objetoB);

console.log(objetoA);



let carro = {
    portas: 2,
    portamalas: '200l',
    motor: '2,0'
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);