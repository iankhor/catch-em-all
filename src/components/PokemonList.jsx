import { selectPokemon } from './../store'

export default function PokemonList({ list }) {
  return(
    <div>
      <ul>
        {
          list?.map((item, index) =>
            <li  key={index} onClick={() => selectPokemon(item.name)} style={{ cursor: 'pointer' }}>
              <strong>{item.name}</strong>
            </li>
          )
        }
      </ul>
    </div>
  )
}