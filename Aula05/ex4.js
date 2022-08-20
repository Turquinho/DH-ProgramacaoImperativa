/*
    José da Silva
    27
    83.5
    1.70
    Ouro

    Carlos de Souza 
    28
    80.1
    1.76
    Diamante

    Aline Ferreira
    33
    63.7
    1.53
    Não Possui

    Ana Paula
    26
    55.0
    1.62
    Prata


    Variáveis = Nome / Sobrenome / Idade / Peso (KG) / Altura / Plano

    null = plano

    IMC = p/h*2 (Altura em metros e peso em kg)
*/


// usamos CONST ja que os dados não irão se alterar após a declaração

//Otimização do código

function imc(nome, idade, peso, altura, plano){
    const indiceIMC = peso/(altura*altura)

    if(plano === 1){
        return `${nome} tem ${idade} anos e seu índice de massa corporal é de ${indiceIMC.toFixed(2)} e possui plano`;
    } else if(plano != 1) {
        return `${nome} tem ${idade} anos e seu índice de massa corporal é de ${indiceIMC.toFixed(2)} e não possui plano`
    }

}

const plano = true;

// José da Silva
const nome = "José da Silva"
const msg = imc(nome, 27, 83.5, 1.7, 1) //toFixed limita a quantidade de casas decimais
console.log(msg)

//Carlos de Souza
const nome1 = "Carlos de Souza"
const msg1 = imc(nome1, 28, 80.1, 1.76, 1)
console.log(msg1)

// Aline Ferreira
const nome2 = "Aline Ferreira"
const msg2 = imc(nome2, 33, 63.7, 1.53, 0)
console.log(msg2)

// Ana Paula
const nome3 = "Ana Paula"
const msg3 = imc(nome3, 26, 55, 1.62, 1)
console.log(msg3)




