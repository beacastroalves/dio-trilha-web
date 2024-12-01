/*
  Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
  Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios
  O salário a ser transferido é calculado da seguinte maneira:

  Valor bruto do salário - percentual de imposto mediante a:
  -> faixa salarial + adicional dos benefícios

  Para calcular o percentual de imposto segue as alíquotas:

  De R$ 0.00 a R$ 1100.00 = 5.00%
  De R$ 1100.01 a R$ 2500.00 = 10.00%
  Maior que R$ 2500.00 = 15.00%

  Exemplo:
      Entrada:
        2000
        250

      Saída:
        2050.00
*/

const { gets, print } = require('./funcoes-auxiliares-ex3');

// let valorSalario = gets();
// const valorBeneficios = gets();

// function calcularImposto(valor) {
//   let aliquota
//   if (valor <= 1100) {
//     aliquota = 5.00;
//   } else if (valor > 1100.00 && valor < 2500) {
//     aliquota = 10.00;
//   } else {
//     aliquota = 15.00;
//   }
//   return valor * (1 - (aliquota / 100));
// }

// const salarioLiquido = calcularImposto(valorSalario) + valorBeneficios;

// print(salarioLiquido);

// Refatorando para um objeto Funcionario.

const funcionario = {
  salario: gets(),
  beneficios: gets(),
  pegarSalarioLiquido: function() {
    let aliquota = 15.00;

    if (this.salario <= 1100) {
      aliquota = 5.00;
    } else if (this.salario > 1100.00 && this.salario < 2500) {
      aliquota = 10.00;
    }

    return (this.salario * (1 - (aliquota / 100))) + this.beneficios;
  },
  calcularSalarioLiquido: function() {
    print(this.pegarSalarioLiquido());
  }
}

funcionario.calcularSalarioLiquido();
