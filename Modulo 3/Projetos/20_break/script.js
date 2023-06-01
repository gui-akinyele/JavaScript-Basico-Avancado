// Break

// Para parar o loop antes que complete seu ciclo;
// Utilizamos o Loop

for(let i = 5; i < 20; i = i + 1) {
    if(i % 10 == 0) {
        console.log('Saiu do loop');
        break
    }

    console.log('Prosseguindo o loop');
}

let nome = 'Guilherme';

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
        nome = 'Jozias';
    }

    if(i == 5 && nome == 'Jozias') {
        console.log('O nome é Jozias, pode parar');
        break;
    }

    console.log(i);
}