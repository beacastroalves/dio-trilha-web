/*
  Faça um programa que receba N (quantidade de números) e seus respectivos valores
  Imprima o maior numero par e o menor numero impar

  Exemplo:
      Entrada:
        5
        3
        4
        1
        10
        8

      Saída:
        Maior número par: 10
        Menor número impar: 1
*/

const { gets, print } = require('./funcoes-auxiliares-ex2');

const quantidadeNumeros = gets();
let maiorValor = null;
let menorValor = null;

for (let i = 0; i < quantidadeNumeros; i++) {
  const numero = gets();

  if (numero % 2 === 0) {
    if (maiorValor === null || numero > maiorValor) {
      maiorValor = numero;
    }
  } else {
    if (menorValor === null || numero < menorValor) {
      menorValor = numero;
    }
  }
}

const mensagem = `Maior número par: ${maiorValor}\nMenor número impar: ${menorValor}`

print(mensagem);
