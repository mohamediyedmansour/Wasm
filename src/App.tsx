import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useThemeMode } from "./utils/theme";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { UploadBox } from "./components/UploadBox";

function App() {
  const { theme, colorMode } = useThemeMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <UploadBox />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
