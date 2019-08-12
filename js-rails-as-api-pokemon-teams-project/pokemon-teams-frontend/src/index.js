const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

let mainContainer = document.querySelector("main")
loadTrainers()
function loadTrainers(){
  fetch(TRAINERS_URL)
  .then(resp => resp.json())
  .then(trainers => createCards(trainers))
}


function createCards(trainers){
  trainers.forEach(trainer => {
    createOneCard(trainer)
  })
}

function createOneCard(trainer) {
  let trainerCard = document.createElement("div")
  trainerCard.className = "card"
  trainerCard.innerText = trainer.name

  let addButton = document.createElement("button")
  addButton.innerText = "Add Pokemon"
  trainerCard.appendChild(addButton)
  addButton.addEventListener("click", (event) => addPokemon(event, trainer))

  trainerCard.appendChild(createPokeList(trainer))

  mainContainer.appendChild(trainerCard)
}

function createPokeList(trainer){
  let list = document.createElement("ul")
  trainer.pokemons.forEach(pokemon => {
    let li = document.createElement("li")
    li.innerText = pokemon.nickname + " (" + pokemon.species + ")"
    let releaseBtn = document.createElement("button")
    releaseBtn.innerText = "Release"
    releaseBtn.className = "release"
    releaseBtn.addEventListener('click', event => releasePokemon(event, pokemon.id))
    li.appendChild(releaseBtn)
    list.appendChild(li)
  })
  return list
}

function addPokemon(event, trainer){

    fetch(POKEMONS_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trainer_id: trainer.id
      })
    })
    .then(resp => resp.json())
    .then(pokemon => {
      let trainerCard = event.target.parentNode
      let pokemonList = trainerCard.querySelector("ul")
      let li = document.createElement("li")
      li.innerText = pokemon.nickname + " (" + pokemon.species + ")"
      pokemonList.appendChild(li)
      let releaseBtn = document.createElement("button")
      releaseBtn.innerText = "Release"
      releaseBtn.className = "release"
      releaseBtn.addEventListener('click', event => releasePokemon(event, pokemon.id))
      li.appendChild(releaseBtn)
    })
    .catch(error => console.log(error))
}

function releasePokemon(event, pokemon_id){
  fetch(POKEMONS_URL + "/" + pokemon_id, {
    method: "DELETE"
  }).then(resp =>  event.target.parentNode.remove())

}
