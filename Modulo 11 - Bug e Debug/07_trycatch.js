//! Try e catch

//* O bloco try e catch, vai tentar executar um código, caso não consiga ele pode retornar o erro que esse código gerou;
//* Muito útil para o debug;

//b = 2;

try {

    let a = 2 + b;

} catch(e) {

    console.log(e);

}

console.log('teste');