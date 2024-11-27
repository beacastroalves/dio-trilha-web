function escrevaMeuNome(nome) {
  return nome;
}

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Vitor') + ' é maior de idade');
  } else {
    console.log('menor de idade');
  }
}

(function () {
  verificarIdade(18);
})();
