// * Armazene a velocidade de um carro em variável, com número que desejar;
//* Faça uma estrutura if/else que verifica se ele está acima da velocidade;

// ! 80 é a velocidade máxima permitida;
// ! se estiver acima ou abaixo exiba mensagens com console.log;

let velocidade = 81;

if (velocidade <= 80){
    console.log("Dentro do limite de velociade, NÂO levou multa!");
}
else {
    console.log("Acima do limite de velocidade, LEVOU multa!");
}

// outra resolução >>>>>>>>>>>>>>

let vel = 81;

if(vel > 80) {
    console.log("Levou multa");
}
else {
    console.log("Não levou multa")
}