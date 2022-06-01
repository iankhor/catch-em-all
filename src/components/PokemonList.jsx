import { useMemo } from 'react'
import { selectPokemon, useStore } from './../store'

export default function PokemonList() {
  const { searchTerm, list } = useStore()

  const filteredList = useMemo(() => {
    return list?.filter(p => p.name.toLowerCase().includes(searchTerm)  )
  }, [list, searchTerm])

  return(
    <div>
      <ul>
        {
          filteredList?.map((item, index) =>
            <li  key={index} onClick={() => selectPokemon(item.name)} style={{ cursor: 'pointer' }}>
              <strong>{item.name}</strong>
            </li>
          )
        }
      </ul>
    </div>
  )
}