import { useEffect, useState } from "react";
import StateManagerExample from "./components/StateManagerExample";
import * as Pokedex from "pokeapi-js-wrapper";

const P = new Pokedex.Pokedex();

async function fetchPokemonList(set) {
  const data = await P.getPokemonsList();
  set(data.results);
}

function VanillaReactStateManager() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPokemonList(setPokemonList);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Third party State Management (Zustand)</h1>
      <StateManagerExample />
      <hr />
      <h1>(Vanilla) React state management</h1>
      <VanillaReactStateManager />
    </div>
  );
}

export default App;
