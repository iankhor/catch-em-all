import { useStore } from './store'
import PokemonList from './PokemonList'
import shallow from 'zustand/shallow'

export default function Search() {
    const { searchTerm, search } = useStore(
      ({ searchTerm, search }) => ({ searchTerm, search })
    , shallow)

  return(
    <div>
      <input type="text" value={searchTerm} onChange={(e) => search(e.target.value)} />
      <PokemonList />
    </div>
  )
}
