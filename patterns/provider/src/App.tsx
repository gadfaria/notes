import "./App.css";
import SwitchTheme from "./components/SwitchTheme";
import useTheme from "./hooks/useTheme";

function App() {
  const theme = useTheme();

  return (
    <div className={`App ${theme.theme}`}>
      <h1>Provider</h1>
      <SwitchTheme />
    </div>
  );
}

export default App;
