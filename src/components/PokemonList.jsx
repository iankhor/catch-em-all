import { selectPokemon } from './../store'

export default function PokemonList({ list }) {
  return(
    <div>
      <ul>
        {
          list?.map((item) =>
            <li  key={item.name} onClick={() => selectPokemon(item.name)} style={{ cursor: 'pointer' }}>
              <strong>{item.name}</strong>
            </li>
          )
        }
      </ul>
    </div>
  )
}