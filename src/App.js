import StateManagerExample from "./components/StateManagerExample";
import VanillaReactStateManager from "./components/VanillaStateManagerExample";

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
