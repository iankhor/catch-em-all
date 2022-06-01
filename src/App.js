import { useEffect, useState, useMemo } from 'react'
import { pokemonList$, selectedPokemon$, fetchPokemonList, selectPokemon } from './store'


function PokemonList({ list }) {
  return(
    <div>
      <ul>
        {
          list?.map((item) =>
            <li  key={item.name} onClick={() => selectPokemon(item.name)}>
              <strong>{item.name}</strong>
            </li>
          )
        }
      </ul>
    </div>
  )
}

function Search({ search, setSearch, list  }) {
  return(
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <PokemonList list={list}/>

    </div>
  )
}

function Pokemon({ pokemon }) {
  const { name, weight, height, sprites } = pokemon
  const images = Object.values(sprites || {}).filter(Boolean)

  return (
    <div>
      <h1>{name}</h1>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      {images.map((url) => <img src={url} />)}

    </div>
  )

}



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
