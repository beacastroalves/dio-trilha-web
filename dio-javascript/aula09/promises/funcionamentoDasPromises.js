
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
  }, 1000)
})

console.log('Agora é com você')

promessaDeUmNumeroQualquer
  .then((value) => {
    console.log(value)
    return value + 10
  })
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    console.log('finalizou')
  })