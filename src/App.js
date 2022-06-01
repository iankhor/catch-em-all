import { useEffect, useState, useMemo } from 'react'
import { pokemonList$ } from './store'


function Search({ search, setSearch }) {
  return(
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

function PokemonList({ list }) {
  return(
    <div>
      <ul>
        {
          list?.map((item) =>
            <li key={item.name}>
              <strong>{item.name}</strong>
            </li>
          )
        }
      </ul>
    </div>
  )
}

function App() {
  const [search, setSearch] = useState("")
  const [pokemonList, setPokemonList] = useState([])
  const filteredList = useMemo(() => {
    return pokemonList?.filter(p => p.name.toLowerCase().includes(search)  )
  }, [pokemonList, search])


  useEffect(() => {
    const listSub = pokemonList$.subscribe((r) => setPokemonList(r.results))

    return () => listSub.unsubscribe()
  }, [])

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }}>
      <Search search={search} setSearch={setSearch}/>
      <PokemonList list={filteredList}/>
    </div>
  );
}

export default App;
