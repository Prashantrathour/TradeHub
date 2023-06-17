import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

import MainRoute from "./Routers/MainRoute";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />

        <Box mt="55px">
          <MainRoute />
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
