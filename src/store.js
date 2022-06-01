import { BehaviorSubject } from "rxjs";
import * as Pokedex from 'pokeapi-js-wrapper'

const P = new Pokedex.Pokedex()

const pokemonList$ = new BehaviorSubject([])

const fetchPokemonList = async () => {
  const list = await P.getPokemonsList()
  pokemonList$.next(list)
}

const selectedPokemon$ = new BehaviorSubject(null)

const selectPokemon = async (name) => {
  const pokemon = await P.getPokemonByName(name)
  selectedPokemon$.next(pokemon)
}

export {
  pokemonList$,
  selectedPokemon$,
  fetchPokemonList,
  selectPokemon
}