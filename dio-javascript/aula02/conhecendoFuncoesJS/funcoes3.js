const PAGAMENTO_DEBITO = 1;
const PAGAMENTO_PIX = 2;
const PAGAMENTO_PARCELADO2X = 3;
const PAGAMENTO_PARCELADO3X = 4;

function getMultiplicator(codigo) {
  switch(codigo) {
    case PAGAMENTO_DEBITO:
      return 0.90;
    case PAGAMENTO_PIX:
      return 0.85;
    case PAGAMENTO_PARCELADO2X:
      return 1;
    case PAGAMENTO_PARCELADO3X:
      return 1.10;
  }
  return 0;
}

function getMensage(codigo) {
  switch(codigo) {
    case PAGAMENTO_DEBITO:
      return 'no debito';
    case PAGAMENTO_PIX:
      return 'no Pix';
    case PAGAMENTO_PARCELADO2X:
      return 'parcelado em 2x';
    case PAGAMENTO_PARCELADO3X:
      return 'parcelado em 3x ou mais';
  }
  return 'codigo invalido';
}

function precoAPagar(precoEtiqueta, codigo) {
  valorAPagar = precoEtiqueta * getMultiplicator(codigo);
  const condicao = getMensage(codigo);
  console.log(`A forma de pagamento será ${condicao} e o valor total a pagar será de ${valorAPagar} reais`);
}

precoAPagar(500, 1);
precoAPagar(100, 2);
precoAPagar(200, 3);
precoAPagar(300, 4);
