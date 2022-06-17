import { useMemo } from 'react'
import { selectPokemon, useStore } from './../store'
import shallow from 'zustand/shallow'


export default function PokemonList() {
  const { searchTerm, list } = useStore(
    ({ searchTerm, list }) => ({ searchTerm, list })
  , shallow)

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
