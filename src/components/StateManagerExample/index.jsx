import { useEffect } from "react";
import Search from "./Search";
import Pokemon from "./Pokemon";
import { useStore } from "./store";
import shallow from "zustand/shallow";

const styles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
};

export default function StateManagerExample() {
    const { fetchPokemonList } = useStore(
      ({ fetchPokemonList }) => ({
        fetchPokemonList,
      }),
      shallow
    );
  
    useEffect(() => {
      fetchPokemonList();
    }, [fetchPokemonList]);
  
    return (
        <div>
            <h1>State manager</h1>
            <div style={styles}>
                <Search />
                <Pokemon />
            </div>
        </div>
    );
  }
