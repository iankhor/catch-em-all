import { useEffect, useState, useMemo } from 'react'
import { pokemonList$, selectedPokemon$, fetchPokemonList } from './store'
import Search from './components/Search'
import Pokemon from './components/Pokemon'

function App() {
  const [search, setSearch] = useState("")
  const [pokemonList, setPokemonList] = useState([])
  const [pokemon, setPokemon] = useState([])
  const filteredList = useMemo(() => {
    return pokemonList?.filter(p => p.name.toLowerCase().includes(search)  )
  }, [pokemonList, search])


  useEffect(() => {
    const listSub = pokemonList$.subscribe((r) => setPokemonList(r.results))
    const pokemonSub = selectedPokemon$.subscribe(setPokemon)

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
      {pokemon && <Pokemon pokemon={pokemon}/>}
    </div>
  );
}

export default App;
