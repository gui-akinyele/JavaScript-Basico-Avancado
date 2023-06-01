// Switch 

// Quando há a necessecidade de vários ifs, podemos utilizar o switch/case;
// Para sair de um case podemos utilizar o break;
// Podemos inserir uma expressão default, para caso nenhum valor for correspondido;

// muitos programadores optam por usar varios ifs;

switch("Jose") {
    case "João":
            console.log("Seu nome é João");
            break;
    case "Marcos":
        console.log("Seu nome é Marcos");
        break;
    default:
        console.log("Seu nome não nem João nem Marcos");
        break;
}

let nomes = "Guilherme";

switch(nomes) {
    case "Guilherme":
        console.log("Seu nome é Guilherme");
        break;
    case "João":
        console.log("Seu nome é João");
        break;
    default:
        console.log("Seu nome não nem Guilherme não João");
        break;
}

let nome = "Guilherme";

if(nome == "Guilherme") {
    console.log("Seu nome é Guilherme");
} else {
    console.log("Seu nome não foi encontrado");
}