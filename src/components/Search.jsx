import PokemonList from './PokemonList'

export default function Search({ search, setSearch, list  }) {
  return(
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <PokemonList list={list}/>
    </div>
  )
}
