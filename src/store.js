import { BehaviorSubject } from "rxjs";
import * as Pokedex from 'pokeapi-js-wrapper'
import create from 'zustand'

const useStore = create(set => ({
  loading: false,
  searchTerm: "",
  list: [],
  selected: null,
  saveList: (loading, list) => set({ loading, list }),
  select: (loading, name) => set({ loading, selected: name }),
  search: (term) => {
    console.log(term)
    set({ searchTerm: term })
  },
}))

const P = new Pokedex.Pokedex()

const pokemonList$ = new BehaviorSubject({
  loading: false,
  data: []
})

const selectedPokemon$ = new BehaviorSubject({
  loading: false,
  data: null
})

function withWrapper(observable, fetcher) {
  return async () => {
    observable.next({ loading: true, data: null })
    const data = await fetcher
    observable.next({ loading: false, data })
  }
}

const fetchPokemonList = () =>
  withWrapper(
    pokemonList$,
    P.getPokemonsList()
  )()

const selectPokemon = async (name) =>
  withWrapper(
    selectedPokemon$,
    P.getPokemonByName(name)
  )()

export {
  pokemonList$,
  selectedPokemon$,
  fetchPokemonList,
  selectPokemon,
  useStore
}