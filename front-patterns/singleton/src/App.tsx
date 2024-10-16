import "./App.css";
import DecrementButton from "./components/DecrementButton";
import IncrementButton from "./components/IncrementButton";
import singletonCounter from "./utils/counter";

function App() {
  function handleClick() {
    alert(singletonCounter.getCount());
  }

  return (
    <>
      <h1>Singleton</h1>
      <button
        onClick={handleClick}
        style={{
          marginBottom: "1rem",
        }}
      >
        Get Value
      </button>
      <div className="card">
        <IncrementButton />
        <IncrementButton />
        <DecrementButton />
        <DecrementButton />
      </div>
    </>
  );
}

export default App;
