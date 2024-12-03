


function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">${pokemon.name}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
        </ol>

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="${pokemon.name}">

      </div>
    </li>
  `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons) => {
  const listItems = []
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(convertPokemonToLi(pokemon))
  }

  console.log(listItems)
})
