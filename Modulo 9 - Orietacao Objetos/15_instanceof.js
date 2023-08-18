//! Instanceof operator

//* Podemos verificar quem é o pai do objeto utilizando o instanceof;

class Mamifero {
    constructor(patas) {
      this.patas = patas;
    }
  }
  
  let coiote = new Mamifero(4);
  
  console.log(coiote.patas);
  
  class Cachorro extends Mamifero {
    constructor(patas, raca) {
      super(patas, patas);
      this.raca = raca;
    }
  
    latir() {
      console.log("Au au");
    }
  }
  
  console.log(new Cachorro instanceof Mamifero);

  console.log(coiote instanceof Mamifero);