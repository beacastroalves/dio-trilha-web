class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  estimativaDeGastoPorViagem(distancia, preco) {
    return distancia * this.gastoMedioPorKm * preco;
  }
}

const onix = new Carro('Chevrolet', 'Preto', 1/11.2);
const palio = new Carro('Fiat', 'Prata', 1/10);


console.log(onix.estimativaDeGastoPorViagem(110, 7));
console.log(palio.estimativaDeGastoPorViagem(110, 7));
