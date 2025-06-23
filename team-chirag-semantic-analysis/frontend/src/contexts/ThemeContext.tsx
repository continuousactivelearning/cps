// src/contexts/ThemeContext.tsx
import { createContext, useContext, useState, type ReactNode, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<"light"|"dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          background: {
            default: themeMode === "light" ? "#f7f7f7" : "#121212",
            paper: themeMode === "light" ? "#ffffff" : "#1e1e1e",
          },
          primary: { main: "#1976d2" },
          secondary: { main: "#9c27b0" }
        },
        typography: {
          fontFamily: "'Inter', sans-serif"
        }
      }),
    [themeMode]
  );

  const toggleTheme = () => setThemeMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme: themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
