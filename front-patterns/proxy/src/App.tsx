import "./App.css";

function App() {
  const person = {
    name: "Gabriel",
    age: 26,
  };

  const personProxy = new Proxy(person, {
    get(obj, prop) {
      const propValue = Reflect.get(obj, prop);
      return propValue;
    },
    set(obj, prop, value) {
      if (prop === "age" && value < 18) {
        alert("You are not allowed to set age to less than 18");
        return false;
      }
      if (prop === "name" && value.trim() === "") {
        alert("Name cannot be empty");
        return false;
      }
      alert(`Setting ${String(prop)} to ${value}`);
      Reflect.set(obj, prop, value);
      return true;
    },
  });

  return (
    <>
      <h1>Proxy</h1>
      <div className="buttons">
        <button
          onClick={() => {
            alert(personProxy.name);
          }}
        >
          Get name
        </button>

        <button
          onClick={() => {
            const name = prompt("Enter name:");
            personProxy.name = name || "";
          }}
        >
          Set name
        </button>
      </div>

      <div className="buttons">
        <button onClick={() => (personProxy.age += 1)}>Increase age</button>

        <button onClick={() => (personProxy.age -= 1)}>Decrease age</button>
      </div>
    </>
  );
}

export default App;
