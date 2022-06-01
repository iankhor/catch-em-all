import { useStore } from './../store'
import PokemonList from './PokemonList'

export default function Search() {
    const { searchTerm, search } = useStore()

  return(
    <div>
      <input type="text" value={searchTerm} onChange={(e) => search(e.target.value)} />
      <PokemonList />
    </div>
  )
}
