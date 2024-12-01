//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const { gets, print } = require('./funcoes-auxiliares-ex4');

let media = gets();

if (media < 5) {
  print('REP');
} else if (media >= 5 && media < 7) {
  print('REC');
} else {
  print('APR');
}