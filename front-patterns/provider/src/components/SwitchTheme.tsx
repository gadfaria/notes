import useTheme from "../hooks/useTheme";

export default function SwitchTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch to dark" : "Switch to light"}
    </button>
  );
}
