// ** Escopo de uma função

// O que acontece dentro de uma função ica separado do escopo global;

//! O escopo global seria todo o arquivo de Javascript;

let n = 10;

function numero() {
    let n = 25;
    console.log(n);
}

numero();

console.log(n);

