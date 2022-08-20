/*  
1)Crie uma função que converta polegadas em centímetros.

R:
function polegadasEmCm(polegadas = 0){
    return(polegadas*2.54)
}

const retorno = polegadasEmCm(7);
console.log(retorno)
*/

/* 
2) Crie uma função que receba uma string e a converta em um URL.
 ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

R:
    function stringToURL(string) {
        return 'http://www.' + string + '.com.br'
    }
const url = stringToURL('xvideos')
console.log(url) 
*/

/*
3) Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

R:
 function recieveString (string) {
    return string + '!'
 }

const stringExclamacao = recieveString('Eita peuga')
console.log (stringExclamacao)
*/

/*
4) Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

R:
function idadeCachorroHumano(AnoHumano){
    return AnoHumano*7
}
const idadeCachorro = idadeCachorroHumano (6)
console.log (idadeCachorro + ' Anos caninos')
*/

/*
5) Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês.

R:

function valorHoraTrabalho(salariomes){
    return salariomes/160
}
const valorHoras = valorHoraTrabalho (1550)
console.log (valorHoras)
*/

/*6) Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

R:

function calculadoraIMC (peso, altura){
    return peso/(altura*altura)
}

const resultadoIMC = calculadoraIMC (90, 180)
console.log (resultadoIMC)
*/

/*
7)Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. .toUpperCase()

R: 

function stringMaiscula(string){
    return string.toUpperCase()
}

const Maiscula = stringMaiscula ('isso aqui tem que exibir maisculo')
console.log(Maiscula)
*/

/* 
8) Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro. typeof 

R:

function par(parametro){
    return typeof parametro
}

const tipoParametro = par('69')
console.log(tipoParametro)
*/

/*
9)Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência. Math pi

R:

function calcCirc(raio){
    return 2*raio*Math.PI
}

const valorCirc = calcCirc(5)
console.log(valorCirc)
*/