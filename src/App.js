import { useEffect, useState, useMemo } from 'react'
import { pokemonList$, selectedPokemon$, fetchPokemonList } from './store'
import Search from './components/Search'
import Pokemon from './components/Pokemon'

function App() {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState([])
  const [pokemonList, setPokemonList] = useState([])
  const [pokemon, setPokemon] = useState([])
  const filteredList = useMemo(() => {
    return pokemonList?.filter(p => p.name.toLowerCase().includes(search)  )
  }, [pokemonList, search])


  useEffect(() => {
    const listSub = pokemonList$.subscribe(({ loading, data }) => {
      setLoading(loading)
      setPokemonList(data.results)
    })
    const pokemonSub = selectedPokemon$.subscribe(({ loading, data }) => {
      setLoading(loading)
      setPokemon(data)
    })

    fetchPokemonList()
    return () => {
      pokemonSub.unsubscribe()
      listSub.unsubscribe()
    }
  }, [])

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }}>
      <Search search={search} setSearch={setSearch} list={filteredList}/>
      {pokemon && !loading && <Pokemon pokemon={pokemon}/>}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default App;
