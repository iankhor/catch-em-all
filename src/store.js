import { BehaviorSubject } from "rxjs";
import * as Pokedex from 'pokeapi-js-wrapper'

const P = new Pokedex.Pokedex()

export const pokemonList$ = new BehaviorSubject([])

const fetchPokemonList = async () => {
  const list = await P.getPokemonsList()
  pokemonList$.next(list)
}

fetchPokemonList()