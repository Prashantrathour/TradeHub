import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
<<<<<<< HEAD
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';
=======
import Navbar from './components/Navbar';
import Middle from './components/Middle';
>>>>>>> 4ad7740ce4e71f40cabd0761dd5d83b6654e2adf

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
     <AllRoutes/>
     <Footer/>
=======
      <ChakraProvider>
        <Navbar/>
        <Middle/>
      </ChakraProvider>
>>>>>>> 4ad7740ce4e71f40cabd0761dd5d83b6654e2adf
    </div>
  );
}

export default App;
