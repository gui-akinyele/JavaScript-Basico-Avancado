//* Escreva uma função que detecta o tipo de dado passado;
//* Verifique se é um: number, boolean ou string;
//! Retorne uma mensagem para cada tipo;
//! Execute uma função para cada caso;

function tipo(a) {
    console.log(typeof(a));
}

tipo("teste");
tipo(3);
tipo(true);

// Resolução professor

function verificaTipoDado(dado) {
    if(typeof dado === 'string') {
        console.log("Este dado é uma string");
    } else if(typeof dado === 'number') {
        console.log("Este dado é um number");
    } else if(typeof dado === 'boolean') {
        console.log("Este dado é um booleano");
    }
}

verificaTipoDado(4);
verificaTipoDado('Teste');
verificaTipoDado(true);