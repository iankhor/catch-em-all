import { useState, useEffect } from "react";
import { fetchPokemon } from "./api";

export default function Pokemon({ pokemonName, loading, setLoading }) {
  const [pokemon, setPokemon] = useState(null);

  
  useEffect(() => {
      if (pokemonName) fetchPokemon(pokemonName, setPokemon, setLoading);
   }, [pokemonName])
    
  if (loading) return <div style={{ backgroundColor: "grey" }}>Loading...</div>
  if (loading && !pokemon) return null
    
  if(pokemon) {
    const { name, weight, height, sprites } = pokemon;
    const images = Object.values(sprites || {}).filter(Boolean);

      return (
        <div>
          <h1>{name}</h1>
          <p>Weight: {weight}</p>
          <p>Height: {height}</p>
          {images.map((url, index) => (
            <img key={index} src={url} />
          ))}
        </div>
      );
  }

}
