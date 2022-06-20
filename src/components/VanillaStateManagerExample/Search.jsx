import { useEffect, useState, useMemo } from "react";
import PokemonList from "./PokemonList";
import { fetchPokemonList } from "./api";

export default function Search({ setLoading, setPokemonName }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = useMemo(() => {
    return pokemonList
      ?.filter((p) => p.name.toLowerCase().includes(searchTerm))
      .slice(0, 15);
  }, [pokemonList, searchTerm]);

  useEffect(() => {
    fetchPokemonList(setPokemonList, setLoading);
  }, []);

  return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <PokemonList list={filteredList} set={setPokemonName} />
      </div>
  );
}
