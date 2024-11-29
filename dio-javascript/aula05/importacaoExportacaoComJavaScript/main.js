const { gets, print } = require('./funcoes-auxiliares');

/*
  Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 -100
  Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior número sorteado.

  Dados de entrada:
  5
  50
  10
  98
  23

  Saída:
  98

*/

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  numerosSorteados.push(numeroSorteado);
}


let maiorNumero = -1;

for (let i = 0; i < numerosSorteados.length; i++) {
  const numeroSorteado = numerosSorteados[i];

  if(numeroSorteado > maiorNumero) {
    maiorNumero = numeroSorteado;
  }
}

print(maiorNumero);
