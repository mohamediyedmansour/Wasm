import { ThemeProvider } from "@mui/material";

import Navbar from "./components/Navbar";
import { ColorModeContext, useThemeMode } from "./utils/theme";

function App() {
  const { theme, colorMode } = useThemeMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
