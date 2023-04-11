const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

const pokemonContainer = document.querySelector(".pokemon-container");
const searchInput = document.querySelector("#pokemon-search");
const searchButton = document.querySelector("#search-button");
let currentPokemonId;
let currentPokemon;
let pokemonRequests = [];

const getPokemonTemplate = () => {
  return `
    <div class="pokemon">
    <h3>${currentPokemon.name}</h3>
    <span> ID: ${currentPokemon.id}</span>
    <img src="${currentPokemon.image}" alt="${currentPokemon.image}"/>

    </div>
    `;
};

const renderPokemon = () => {
  const template = getPokemonTemplate();
  pokemonContainer.innerHTML += template;
};

const fetchPokemon = () => {
  if (pokemonRequests.includes(currentPokemonId)) {
    return;
  } else {
    pokemonRequests.push(currentPokemonId);
  }
  fetch(`${POKEMON_URL}${currentPokemonId}`)
    .then((res) => res.json())
    .then((response) => {
      currentPokemon = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_default,
      };
      renderPokemon();
    });
};

const handleSearch = (event) => {
  const inputValue = searchInput.valueAsNumber;
  currentPokemonId = inputValue;
  fetchPokemon();
};

searchInput.value = currentPokemonId;

searchButton.addEventListener("click", handleSearch);
