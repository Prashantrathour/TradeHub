import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

import MainRoute from "./Routers/MainRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      
    

      <ChakraProvider>
        <Navbar />

        <Box mt="55px">
          <MainRoute />
          <Footer/>
        </Box>
      </ChakraProvider>

    </div>
  );
}

export default App;
