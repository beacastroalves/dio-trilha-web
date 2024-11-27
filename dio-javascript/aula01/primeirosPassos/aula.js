/* AULA 01 */

/* PRIMEIRO DESAFIO*/
function viagem() {
  const precoGasoleo = 1.74;
  const precoGasolina = 1.99;
  const tipoCombustivel = 'gasolina';
  const kmPorLitro = 12.3;
  const distanciaEmKm = 540;

  const consumoDeLitro = distanciaEmKm / kmPorLitro;
  let totalPago;

  if (tipoCombustivel === 'gasoleo') {
    totalPago = consumoDeLitro * precoGasoleo;
  } else if (tipoCombustivel === 'gasolina') {
    totalPago = consumoDeLitro * precoGasolina;
  } else {
    console.log('Opcao invalida');
    return;
  }
  console.log('O total pago na viagem com ' + tipoCombustivel + 'foi de: ' + totalPago.toFixed(2));
}

/* SEGUNDO DESAFIO */
function media() {
  const notas = [];
  notas[0] = 6;
  notas[1] = 8;
  notas[2] = 10;

  const media = (notas[0] + notas[1] + notas[2]) / notas.length;
  let classificacao;

  if (media < 5) {
    classificacao = 'reprovado';
  } else if (media >= 5 && media < 7) {
    classificacao = 'de recuperacao';
  } else {
    classificacao = 'aprovado';
  }


  console.log(`O aluno está ${classificacao} com media: ${media}`);
}

/* TERCEIRO DESAFIO */
function imc() {
  const peso = 75;
  const altura = 1.79;
  const imc = peso / Math.pow(altura, 2);
  let classificacao;

  if (imc < 18.5) {
    classificacao = 'abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    classificacao = 'peso normal';
  } else if (imc >= 25 && imc < 30) {
    classificacao = 'acima do peso';
  } else if (imc >= 30 && imc < 40) {
    classificacao = 'obeso';
  } else {
    classificacao = 'obesidade grave';
  }


  console.log(`A pessoa com altura de ${altura} e peso de ${peso}kg tem imc de ${imc} com classificação ${classificacao}`);
}

/* QUARTO DESAFIO */
function precoAPagar() {
  const precoEtiqueta = 100;
  const condicao = 2;
  let valorAPagar;

  if (condicao === 1) {
    valorAPagar = precoEtiqueta * 0.90;
  } else if (condicao === 2) {
    valorAPagar = precoEtiqueta * 0.85;
  } else if (condicao === 3) {
    valorAPagar = precoEtiqueta;
  } else if (condicao === 4) {
    valorAPagar = precoEtiqueta * 1.10;
  } else {
    console.log('codigo invalido');
    return
  }

  console.log(`A forma de pagamento será ${condicao} e o valor total a pagar será de ${valorAPagar}`);
}