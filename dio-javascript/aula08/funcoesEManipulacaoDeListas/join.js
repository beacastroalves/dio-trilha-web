
const list = [{ nome: 'Benjamin' }, { nome: 'Amanda' }, { nome: 'Rita' }, { nome: 'Alisson' }]

console.log(
  list.map(e => e.nome)
     .filter((e) => e.startsWith('A'))
     .join(', ')
)


console.log(list.map((e) => e.nome).join(', '))

const elementosEmHtml = list
  .filter((e) => e.nome.startsWith('A'))
  .map(e => `
    <li>${e.nome}</li>`)
  .join('')

  console.log(elementosEmHtml)