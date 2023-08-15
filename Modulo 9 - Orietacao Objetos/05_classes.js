//! Classes

//* O protoype do JavaScript pode ser chamado de classe;
//* Pois nas outras linguagens uma Class é um modelo de um objeto;
//* Podemos criar diversos objetos em cima de um prototype;

let cachorro = {
    patas: 4,
    raca: 'SDR',
    latir: function(){
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorro.raca);


let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemão";

console.log(pastor.raca);