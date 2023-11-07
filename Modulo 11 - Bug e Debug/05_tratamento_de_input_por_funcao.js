//! Tratamento de input por função

//* Não podemos controlar os dados que o usuário envia, então para o bom funcionamneto do softwar, devemos tratar eles;

//* Veja um exemplo de tratamento de number:

function checarNumero(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        console.log("Informe somente números");
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero('sadh');

let number = prompt("Digite um número");
checarNumero(number);