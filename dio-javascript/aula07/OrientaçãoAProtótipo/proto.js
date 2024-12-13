function Pessoa(nome) {
  this.nome = nome
}

Pessoa.prototype.falarSeuNome = function () {
  console.log(`Meu nome é ${this.nome}`)
}

const renan = new Pessoa('renan')
renan.falarSeuNome()