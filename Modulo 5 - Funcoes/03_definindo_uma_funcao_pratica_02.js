const soma = function(a, b) {
    return a + b;
}

console.log(soma(3, 5));

const saudacao = function(nome) {
    if(nome == "Guilherme") {
        return "Olá Guilherme!"
    }
}

console.log(saudacao("Guilherme"));


/* ########################################################## */

function multiTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiTresNumeros(2, 3 ,4));

const mult = multiTresNumeros(5, 4, 8);

console.log("O valor de mult é: " + mult)


/* ########################################################## */

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0));
console.log(podeDirigir(19, 1));
console.log(podeDirigir(17, false));