import * as Pokedex from "pokeapi-js-wrapper";

const P = new Pokedex.Pokedex();

async function fetchPokemonList(setPokemonList, setLoading) {
  setLoading(true);
  const data = await P.getPokemonsList();
  setPokemonList(data.results);
  setLoading(false);
}

async function fetchPokemon(selected, setPokemon, setLoading) {
  setLoading(true);
  const data = await P.getPokemonByName(selected);
  setPokemon(data);
  setLoading(false);
}

export { fetchPokemonList, fetchPokemon };
