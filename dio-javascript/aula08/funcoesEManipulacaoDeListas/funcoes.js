
function adicao(x, y) {
  return x + y;
}


function multiplicacao(x, y) {
  return x * y;
}


function calcular(x, operacao, y) {
  console.log(operacao(x, y))
}

calcular(10, adicao, 20)
calcular(6, multiplicacao, 20)
calcular(43, adicao, 500)
calcular(5, multiplicacao, 500)