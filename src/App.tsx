import { Box } from "@chakra-ui/react";
import { Provider } from "@/components/ui/provider";

function App() {
  return (
    <Provider>
      <Box bg="bg.main" h="100vh">
        Some text
      </Box>
    </Provider>
  );
}

export default App;
