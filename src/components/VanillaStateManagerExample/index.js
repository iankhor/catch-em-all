import { useState } from "react";
import Pokemon from "./Pokemon";
import Search from "./Search";

const styles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
};

export default function VanillaStateManager() {
  const [loading, setLoading] = useState(false);
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div style={styles}>
      <Search setLoading={setLoading} setPokemonName={setPokemonName} />
      <Pokemon
        pokemonName={pokemonName}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}
