import Search from "./components/Search";
import Pokemon from "./components/Pokemon";
import useSubscriptions from "./hooks/useSubscriptions";

const styles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
};

function App() {
  useSubscriptions();

  return (
    <div style={styles}>
      <Search />
      <Pokemon />
    </div>
  );
}

export default App;
