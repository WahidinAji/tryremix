// import { createCookieSessionStorage } from "@remix-run/node"
// // import { createThemeSessionResolver } from "remix-themes"

import { createContext, useContext, useState } from "react";

enum Themes{
  light = "light",
  dark = "dark",
  system = "system"
};
type ThemeState = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};
const initialThemeState: ThemeState = {
  theme: Themes.system,
  setTheme: (theme: Themes) => {},
};

const ThemeContext = createContext<ThemeState>(initialThemeState);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>(Themes.system);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme, Themes };