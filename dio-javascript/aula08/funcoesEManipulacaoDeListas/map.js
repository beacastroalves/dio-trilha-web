
class Pessoa {
  constructor(name) {
    this.name = name;
  }
}

const list = [new Pessoa('Benjamin'), new Pessoa('Amanda'), new Pessoa('Jose'), new Pessoa('Rita'), ]

const listNames = list.map((element, i) => {
  return `${i} - ${element.name}`;
})


const listNames2 = list.map((element) => element.name)

console.log(listNames)
console.log(listNames2)