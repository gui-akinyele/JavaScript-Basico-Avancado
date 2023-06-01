//* Argumentos opcionais

// Podemos chamar uma função em JS sem o número igual de parâmetros determinados;

function nomeComIdade(nome, idade) {
    if(idade === undefined) {
        console.log("Seu nome é " + nome);
    } else {
        console.log("Seu nome é " + nome + " e você tem " + idade + " anos");
    }
}

nomeComIdade("João");
nomeComIdade("João", 45);

function saudacao(nome, idade) {
    if(idade === undefined) {
        console.log("Olá " + nome);
    } else {
        console.log("Olá " + nome + " você tem " + idade + " anos");
    }
}

saudacao("Guilherme");
saudacao("Guilherme", 30);