function handleSearchInput(event, allPokemonData, pokemonContainer) {
  const filteredPokes = allPokemonData.filter(pokeObj => {
    return pokeObj.name.includes(event.target.value.toLowerCase())
  })
  const filteredPokeHTML = renderAllPokemon(filteredPokes)
  pokemonContainer.innerHTML = filteredPokeHTML ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
}

function postNewPokemon(pokemonContainer){
  event.preventDefault()
  let pokemonName = document.getElementById("name-input").value
  let pokemonSprite = document.getElementById("sprite-input").value

  fetch("http://localhost:3000/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: pokemonName,
      sprites: {
        front: pokemonSprite
      }
    })
  })
  .then(resp => resp.json())
  .then(pokeData => {
    let pokeHtml = renderSinglePokemon(pokeData)
    pokemonContainer.innerHTML += pokeHtml
  })

}

function deletePokemon(){
  if (event.target.className === "pokemon-button"){
    let pokeNode = event.target.parentNode.parentNode
    let pokeId = pokeNode.querySelector("img").dataset.id
    fetch(`http://localhost:3000/pokemon/${pokeId}`, {
      method: "DELETE"
    }).then(resp => {
      pokeNode.remove()
    })
  }
}

/************************* Helper Fns for Producing HTML **********************/
function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join('')
}

function renderSinglePokemon(pokemon) {
  return (`
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      <button data-action="delete" class="pokemon-button">Delete</button>
    </div>
  </div>`)
}
