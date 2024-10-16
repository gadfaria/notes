import { PropsWithChildren, useState } from "react";
import { ThemeContext } from "../context/themeContext";

export default function ThemeProvider(props: PropsWithChildren) {
  const { children } = props;

  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
