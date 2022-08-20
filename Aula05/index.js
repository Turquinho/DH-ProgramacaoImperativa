/* 
    Aula 05 - Funções
        - Declaração
        - Chamada/Invocação
        - Valor de Retorno
        - Parametro opcional
        - Função expressa (Quando declaramos a função dentro de uma variável)

    -> Reutilização

    OBS: Sempre que tivermos grande quantidade de repetições no código, podemos pensar em alguma solução com funções
    para reutilização de código.
*/

/*const nome = "José da Silva";
const idade = 27;
const peso = 83.5;
const altura = 1.7;
const plano = true;
const indiceIMC = peso/(altura*altura);
const msg = nome + " tem " + idade + " anos e seu índice de massa comportal é de " + indiceIMC.toFixed(2) //toFixed limita a quantidade de casas decimais
console.log(msg)*/

/* Template strings
const msg2 = `${nome} tem ${idade} anos e seu índice de massa comportal é de ${indiceIMC.toFixed(2)}`
console.log(msg2);
*/

/*
    Declaração

    palavra reservada function
    nome da função - seguindo as regras de nomenclatura
    () - Abertura e fechamento dos () - Espaço reservado para criação de parâmetros
    {} - Bloco de código a ser executado - Implementação da função
    return - palavra reservada return - que indica o que a nossa função vai retornar/devolver
    
    OBS: Caso o return não seja colocado, automaticamente será retornado para nós o valor de undefined;
    OBS²: Após o return, nada será executado pois o mesmo encerra a função.
    OBS³: As funções possuem uma visibilidade global parecida com o var, podendo ser executadas antes da sua declaração visual
*/

function minhaPrimeiraFuncao() {
    return "Executando a minha primeira função"
}

const retornofuncao = minhaPrimeiraFuncao();
console.log(retornofuncao)

/*
    Chamada/Execução/Invocação de função

    chamar a função pelo nome que foi dado seguido dos ()
*/



// Os parametros são variáveis recebidas na chamada da função

function soma(num1 = 0,num2 = 0) {
    console.log(num1 + num2)
    return (num1 + num2)
}
soma(80,31);

