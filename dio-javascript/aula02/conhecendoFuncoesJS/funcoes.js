/* PRIMEIRO EXEMPLO
  USANDO O CODIGO DA AULA ANTERIOR, SOBRE IMC */

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return 'abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'acima do peso';
  } else if (imc >= 30 && imc < 40) {
    return 'obeso';
  }
  return 'obesidade grave';
}

(function () {
  const peso = 75;
  const altura = 1.79;
  const imc = calcularImc(peso, altura);
  const classificacao = classificarImc(imc);

  console.log(`A pessoa com altura de ${altura} e peso de ${peso}kg tem imc de ${imc} com classificação ${classificacao}`);
})();
