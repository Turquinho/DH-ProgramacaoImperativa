const readlineSync = require('readline-sync')

console.log (
    `Escolha uma dentre as opcões
    01 - Pipoca
    02 - Macarrão
    03 - Carne
    04 - Feijão
    05 - Brigadeiro`
)

const opcao =  readlineSync.question('Escolha o seu alimento: ')
const tempo =  readlineSync.question('Escolha o tempo de aquecimento em segundos: ')

function microondas(opcao, tempo) {
    let pratoExistente = false

    if (opcao == 1){
        tempoPadrao = 10;
        pratoExistente = true
      } else if (opcao == 2){
        tempoPadrao = 8;
        pratoExistente = true
      } else if (opcao == 3){
        tempoPadrao = 15;
        pratoExistente = true
      } else if (opcao == 4){
        tempoPadrao = 12;
        pratoExistente = true
      } else if (opcao == 5){
        tempoPadrao = 8;
        pratoExistente = true
      }  
       else {
        pratoExistente = false
        return console.log ("Prato Inexistente.")
      }

    if (pratoExistente){
        if (tempo > 2*tempoPadrao && tempo < 3*tempoPadrao){
        console.log("Sua comida queimou!")
       } else if (tempo < tempoPadrao){
        console.log("Tempo insuficiente.")
       } else if (tempo > 3*tempoPadrao){
        console.log("KABUMMM!!!")
       }
      return console.log ("Prato pronto, bom apetite!!!")
    }  
}

microondas (opcao, tempo)