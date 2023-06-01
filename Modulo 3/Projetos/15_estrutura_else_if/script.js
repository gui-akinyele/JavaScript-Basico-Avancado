// Estruturas de controle: ELSE IF

// Podemos encadear mais condições com o else if;
// Antes de executar um else ou até mesmo sem ele, podemos verificar mais uma condição;

let a = 5;
let b = 3;

if(a + b == 4) {
    console.log('O resultado é 3');
} else if(a == 4) {
    console.log('O valor de a é 4');
} else if(b == 3) {
    console.log('O valor de b é 3');
} else {
    console.log('Nenhuma das condições acima!');
}

let nome = "Guilherme";
let idade = 31;

if(nome != undefined && nome == "José") {
    console.log("Nome está definido!");
} else if (nome == "Guilherme" && nome.length > 5 && idade == 50) {
   console.log("O nome é Guilherme"); 
} else {
    console.log("Não é Guilherme!");
}

if(1 > 2) {
    console.log("Teste");
} else if(1 == 1) {
    console.log("Testando...")
}
    





