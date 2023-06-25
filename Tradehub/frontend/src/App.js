import { Box, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import MainRoute from "./Routers/MainRoute";
import Footer from "../src/Optional/Footer";
import Navbar from "./Page/Navbar.jsx";
import PaymentPage from "./Page/PPaaymentpage";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
function App() {
  const token = Cookies.get("token");
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

          <Box mt="55px">
            <MainRoute />
            <Footer />
          </Box>
        </ChakraProvider>
      )}
    </div>
  );
}

export default App;
