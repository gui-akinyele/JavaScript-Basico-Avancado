//* Definindo uma função

//! Uma função tem uma estrutura um pouco mais complexa;
//! Devemos declarar a função sempre com a palavra function;
//! Uma função deve ter um nome;
//! Pode conter argumentos/parâmetros, definidos entre ();
//! O corpo da função é definido entre {};
//! Geralmente uma função retorna um valor;
//! É possível declarar funções em variáveis;

function escreverNoConsole() {
    console.log("Escrevendo no console!");
}

escreverNoConsole();

const textoNoConsole = function() {
    console.log("Texto no console!");
}

textoNoConsole();

const textoPorParametro = function(texto) {
    console.log(texto);
}

textoPorParametro("Testando por parâmetros!");