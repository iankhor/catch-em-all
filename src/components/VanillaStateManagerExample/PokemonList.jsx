export default function PokemonList({ list, set }) {
    return (
      <ul>
        {list?.map((item, index) => (
          <li
            key={index}
            onClick={() => set(item.name)}
            style={{ cursor: "pointer" }}
          >
            <strong>{item.name}</strong>
          </li>
        ))}
      </ul>
    );
  }
