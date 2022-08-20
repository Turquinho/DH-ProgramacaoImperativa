/* 
Exercicios no mumuki.io/br

Tipos de comunicação: Idioma
Comunicação entre pessoas: Libras


Máscara de CNPJ

procedure=(Cria uma função/Um novo procedimento)

procedure Colocar3Vermelhas(){
  Colocar(Vermelho)
  Colocar(Vermelho)
  Colocar(Vermelho)
}

program{
  Colocar3Vermelhas()
}

    
Quando criamos um procedure no programa isso deve ser feito apenas uma vez em todo o programa e vai falhar se vc tentar fazer isso mais de uma vez.

VoltarAtras() - comando volta para onde começou

procedure DesenharLinhaPreta3(){
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  VoltarAtras()
}

procedure DesenharQuadradoPretoDeLado3(){
  DesenharLinhaPreta3()
  Mover(Norte)
  DesenharLinhaPreta3()
  Mover(Norte)
  DesenharLinhaPreta3()
}


Exercicio 10:
procedure Colocar3(cor) {
  Colocar(cor)
  Colocar(cor)
  Colocar(cor)
}


program {
  Colocar3(Preto)
}
MESMO QUE
Colocar(Preto)
Colocar(Preto)
Colocar(Preto)


DESENHA UMA LINHA DA COR QUE DEFINIRMOS NO PROGRAM:
procedure DesenharLinha3(cor){
  Colocar(cor)
  Mover(Leste)
  Colocar(cor)
  Mover(Leste)
  Colocar(cor)
  VoltarAtras()
}  


EXERCICIO 12 - DUVIDA
usando DesenharLinha3, defina um procedimento DesenharQuadradoDeLado3, que receba uma cor e desenhe um quadrado de 3x3 com essa cor.

procedure DesenharQuadradoDeLado3(c){
  DesenharLinha3(c)
  Mover(Norte)
  DesenharLinha3(c)
  Mover(Norte)
  DesenharLinha3(c)
}

Exercicio 13

program{
  DesenharLinha3(Verde, Leste)
  Mover(Leste)
  DesenharLinha3(Vermelho, Norte)
  Mover(Norte)
  DesenharLinha3(Preto, Oeste)
  Mover(Oeste)
  DesenharLinha3(Azul, Sul)
  Mover(Sul)
}

*/

console.log()

if(true){

}

