import { useEffect } from 'react'
import { pokemonList$, selectedPokemon$, fetchPokemonList, useStore } from './../store'

export default function useSubscriptions() {
  const { saveList, select } = useStore()

  useEffect(() => {
    const listSub = pokemonList$.subscribe(({ loading, data }) => saveList(loading, data?.results))
    const pokemonSub = selectedPokemon$.subscribe(({ loading, data }) => select(loading, data))
    fetchPokemonList()

    return () => {
      pokemonSub.unsubscribe()
      listSub.unsubscribe()
    }
  }, [])
}
