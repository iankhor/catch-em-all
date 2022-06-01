import { useEffect } from 'react'
import * as Pokedex from 'pokeapi-js-wrapper'

const P = new Pokedex.Pokedex()

const fetch = async () => {
  const list = await P.getPokemonsList()
  console.log(list)
}

function App() {
  useEffect(() => {
    fetch()


  }, [])

  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
