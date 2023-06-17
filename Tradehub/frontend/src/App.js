import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
