import { createTheme, type Theme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export type ColorMode = "light" | "dark";

interface ColorModeContextType {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export const useThemeMode = () => {
  const [mode, setMode] = useState<ColorMode>(
    (localStorage.getItem("theme") as ColorMode) || "light"
  );

  const colorMode = useMemo<ColorModeContextType>(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const next = prev === "light" ? "dark" : "light";
          localStorage.setItem("theme", next);
          return next;
        });
      },
    }),
    []
  );

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return { theme, colorMode, mode };
};
