//! Métodos de array: slice

//* Retorna um array a partir de outro array;
//* O array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array;

let numeros = [0,1,2,3,4,5];

console.log(numeros.slice(2,3));
console.log(numeros.slice(3));

let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5));
console.log(nums.slice(4,6));

console.log(nums.slice(3));

console.log(nums.slice(-2));
console.log(nums.slice(3, -2));