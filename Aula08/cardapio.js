const readlineSync = require('readline-sync')

console.log(
    `
    Escola uma dentre as opções

    01 - X-Bacon
    02 - X-Salada
    03 - X-Egg
    `
);

const opcao =  readlineSync.question('Escolha a sua opção: ')

// Escolha uma opção dentre várias
// Caso seja a opção 01 faça algo
// Caso seja a opção 02 faça algo
//...
//...
// caso não seja nenhhuma das opçoes faça algo

switch(opcao) {
    case '01' || '1':
        console.log("X-Bacon selecionado");
        break
    case '02':
        console.log("X-Salada selecionado");
        break
    case '03':
        console.log("X-Egg selecionado");
        break
    // Caso contrário dos cases acima
    default:
        console.log('Opção inválida')
}

if(opcao === '01' || opcao === 1){
    console.log("X-bacon selecionado")
} else if (opcao === '02' || opcao === 2){
    console.log("X-Salada selecionado")
} else if (opcao === '03' || opcao === 3){
    console.log("X-egg selecionado")
} else {
    console.log
}