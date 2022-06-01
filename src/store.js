import { BehaviorSubject } from "rxjs";
import * as Pokedex from 'pokeapi-js-wrapper'

const P = new Pokedex.Pokedex()

const pokemonList$ = new BehaviorSubject({
  loading: false,
  data: []
})

const fetchPokemonList = async () => {
  pokemonList$.next({ loading: true, data: [] })
  const list = await P.getPokemonsList()
  pokemonList$.next({ loading: false, data: list })
}

const selectedPokemon$ = new BehaviorSubject({
  loading: false,
  data: null
})

const selectPokemon = async (name) => {
  selectedPokemon$.next({ loading: true, data: null })
  const pokemon = await P.getPokemonByName(name)
  selectedPokemon$.next({ loading: false, data: pokemon })
}

export {
  pokemonList$,
  selectedPokemon$,
  fetchPokemonList,
  selectPokemon
}