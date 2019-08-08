document.addEventListener('DOMContentLoaded', () => {
  let allPokemonData = []
  const pokemonContainer = document.querySelector('#pokemon-container')
  const pokemonSearchInput = document.querySelector('#pokemon-search-form')
  const pokemonPostForm = document.querySelector('#pokemon-post-form')
  fetch('http://localhost:3000/pokemon')
    .then((responseObject) => responseObject.json())
    .then((pokeJSONData) => {
      allPokemonData = pokeJSONData
      pokemonContainer.innerHTML = renderAllPokemon(allPokemonData)
    })
    pokemonContainer.addEventListener("click", (event) => deletePokemon())
    pokemonSearchInput.addEventListener('input', (event) => handleSearchInput(event, allPokemonData, pokemonContainer))
    pokemonPostForm.addEventListener('submit', () => postNewPokemon(pokemonContainer))

})
