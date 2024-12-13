
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Sintaxe um pouco mais reduzida que o "for tradicional"
lista.forEach((value, i, listRef) => {
  console.log(value + i)
})

// Mesma sintaxe sendo com for comum
for (let i = 0; i < lista.length; i++) {
  const element = array[i];
  cb(element, i, lista)
}