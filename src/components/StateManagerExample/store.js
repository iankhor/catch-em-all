import * as Pokedex from "pokeapi-js-wrapper";
import create from "zustand";

const useStore = create((set) => ({
  // --- UI logic/bools ---
  loading: false,
  searchTerm: "",
  list: [],
  selected: null,
  search: (term) => set({ searchTerm: term }),
  // --- async stuff below ---
  fetchPokemonList: fetchPokemonList(set),
  fetchPokemon: fetchPokemon(set),
}));

const P = new Pokedex.Pokedex();

function fetchPokemon(set) {
  return async (name) => {
    set({ loading: true });
    const data = await P.getPokemonByName(name);
    set({ loading: false, selected: data });
  };
}

function fetchPokemonList(set) {
  return async () => {
    set({ loading: true });
    const data = await P.getPokemonsList();
    set({ loading: false, list: data.results });
  };
}

export { useStore };
