//* Mais sobre escopo

// Atualmente com let e const, qualquer bloco de código pode separar seu escopo(um if por exemplo);
// Isso é muito bom pois separa os contextos, com var isso não acontecia;
// Ou seja, podemos ter escopos diferentes não só com funções;

let x = 10;

if(x > 5) {
    let x = 20;
    x++;
    console.log(x);
}

console.log(x);