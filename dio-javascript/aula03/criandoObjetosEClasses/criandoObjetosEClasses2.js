class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  valorDoMeuImc() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarMeuImc() {
    const imc = this.valorDoMeuImc();
    if (imc < 18.5) {
      return 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      return 'peso normal';
    } else if (imc >= 25 && imc < 30) {
      return 'acima do peso';
    } else if (imc >= 30 && imc < 40) {
      return 'obeso';
    } else {
      return 'obesidade grave';
    }
  }
}


const derick = new Pessoa('Derick', 75, 1.79);

console.log(derick.classificarMeuImc());
console.log(derick.valorDoMeuImc());
