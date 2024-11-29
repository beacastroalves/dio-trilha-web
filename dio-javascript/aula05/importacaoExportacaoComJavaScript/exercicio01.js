/*
  Faça um programa que receba a média de um aluno.
  Caso a média seja < 5 imprima "Reprovado"
  Caso a média seja >= 5 e < 7 imprima "Recuperação"
  Caso a média seja >= 7 imprima "Aprovado"

  Exemplo:
      Entrada:
        5.5
      Saída:
        Recuperação
*/

const { gets, print } = require('./funcoes-auxiliares-ex1');

const media = gets();
let classificacao;

if (media < 5) {
  classificacao = 'Reprovado';
} else if (media >= 5 && media < 7) {
  classificacao = 'Recuperacao';
} else {
  classificacao = 'Aprovado';
}

print(classificacao);
