import * as Pokedex from "pokeapi-js-wrapper";
import create from "zustand";

const useStore = create((set) => ({
  loading: false,
  searchTerm: "",
  list: [],
  selected: null,
  fetchPokemonList: fetchPokemonList(set),
  fetchPokemon: fetchPokemon(set),
  select: (loading, name) => set({ loading, selected: name }),
  search: (term) => set({ searchTerm: term }),
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
