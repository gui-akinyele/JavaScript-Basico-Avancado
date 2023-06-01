// BOOLEANS: OPERADORES LÓGICOS

//Por meio de uma comparação resultam em um Boolean;
//&& - and -> para ser true, os dois 'lados' da comparação precisam ser true;
// || - or -> para ser true, basta um dos 'lados' da comaparação ser true;
// ! - not -> inverte os valores (true vira false);

// A     | B     | A and B | A or B | Not A |
// False | False | False   | False  | True  |
// False | True  | False   | True   | True  |
// True  | False | False   | True   | False |
// True  | True  | True    | True   | False |

console.log(true && true);
console.log(true && false);
console.log(false || false);
console.log(!true);

console.log('\n');

console.log(5 > 3 && 3 == 2);
console.log(5 > 3 || 3 == 1);

console.log('\n');

console.log(3 == 3 && 'Gui' == 'Gui');
console.log('Felipe' == 'João' || false);

console.log('\n');

console.log(!(true && true));
console.log(!(!(true && true)));

console.log('\n');

console.log(true && true);
console.log(false || false);



