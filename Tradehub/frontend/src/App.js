import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import MainRoute from "./Routers/MainRoute";
import Footer from "../src/Optional/Footer"
import Navbar from "./Page/Navbar.jsx";

import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
       <CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
        </Box>
      ) : (
        <ChakraProvider>
          <Navbar />

          <Box width={"100%"} height={"100%"} mt="50px" backgroundImage={`url('https://img.freepik.com/free-vector/modern-banner-with-abstract-low-poly-design_1048-14340.jpg?size=626&ext=jpg&ga=GA1.2.1215260059.1683710952&semt=ais')`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover">
            <MainRoute />
            <Footer />
          </Box>
        </ChakraProvider>
      )}
    </div>
  );
}

export default App;
