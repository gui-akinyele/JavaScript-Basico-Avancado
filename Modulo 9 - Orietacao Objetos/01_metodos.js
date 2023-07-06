//! Métodos

//* Propriedades que servem como funções;
//* As ações dos objetos;
//* Invocamos os métodos da mesma maneira que funções;

let cachorro = {
    latir: function() {
        console.log("Au au");
    },
    rosnar: function() {
       console.log("Grrrr");
    }
}

cachorro.latir();

cachorro.rosnar();