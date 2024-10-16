import "./App.css";
import observable from "./Observable";

function logger(data: string) {
  console.log(data);
}

function showAlert(data: string) {
  alert(data);
}

observable.subscribe(logger);
observable.subscribe(showAlert);

function App() {
  function handleClick(buttonName: string) {
    observable.notify(`Button ${buttonName} was clicked at ${Date.now()}`);
  }

  return (
    <>
      <h1>Observer</h1>
      <div className="buttons">
        <button onClick={() => handleClick("Button A")}>Button A</button>
        <button onClick={() => handleClick("Button B")}>Button B</button>
        <button onClick={() => handleClick("Button C")}>Button C</button>
      </div>
    </>
  );
}

export default App;
