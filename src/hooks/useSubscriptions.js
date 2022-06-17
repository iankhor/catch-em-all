import { useEffect } from "react";
import {
  pokemonList$,
  selectedPokemon$,
  fetchPokemonList,
  useStore,
} from "./../store";
import shallow from "zustand/shallow";

export default function useSubscriptions() {
  const { saveList, select } = useStore(
    ({ saveList, select }) => ({ saveList, select }),
    shallow
  );

  useEffect(() => {
    const listSub = pokemonList$.subscribe(({ loading, data }) =>
      saveList(loading, data?.results)
    );
    const pokemonSub = selectedPokemon$.subscribe(({ loading, data }) =>
      select(loading, data)
    );
    fetchPokemonList();

    return () => {
      pokemonSub.unsubscribe();
      listSub.unsubscribe();
    };
  }, []);
}
