import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../context/themeContext";

export default function useTheme(): ThemeContextProps {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
}
