import { useStore } from './store'
import Search from './components/Search'
import Pokemon from './components/Pokemon'
import useSubscriptions from './hooks/useSubscriptions'

const styles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr'
}

function App() {
  const { loading, selected } = useStore()

  useSubscriptions()

  return (
    <div style={styles}>
      <Search />
      {selected && !loading && <Pokemon />}
      {loading && <div style={{ backgroundColor: 'grey' }}>Loading...</div>}
    </div>
  );
}

export default App;
