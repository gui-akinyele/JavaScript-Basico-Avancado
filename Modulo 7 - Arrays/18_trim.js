//! Métodos de string: trim

//* Remove tudo que não é string

let texto = '   \n teste  \n  ';
console.log(texto.trim()); //teste

let nome = "         Guilherme    ";

let nomeCorrigido = nome.trim();

console.log(nome);

console.log(nomeCorrigido);