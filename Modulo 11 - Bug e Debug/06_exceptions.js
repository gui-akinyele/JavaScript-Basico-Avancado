//! Exceptions

//* Podemos criar erros no programa, caso alguma condição não seja atendida;
//* Porém as exceptions abortam o programa, só geram o erro;

function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("o parâmetro nome precisa ser uma string");
    }else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Matheus");
saudacao(5);

console.log("teste");