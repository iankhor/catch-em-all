import { useEffect } from "react";
import Search from "./components/Search";
import Pokemon from "./components/Pokemon";
import { useStore } from "./store";
import shallow from "zustand/shallow";

const styles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
};

function App() {
  const { fetchPokemonList } = useStore(
    ({ fetchPokemonList }) => ({
      fetchPokemonList,
    }),
    shallow
  );

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <div style={styles}>
      <Search />
      <Pokemon />
    </div>
  );
}

export default App;
