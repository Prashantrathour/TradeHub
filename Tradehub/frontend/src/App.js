import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import Middle from './components/Middle';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar/>
        <Middle/>
      </ChakraProvider>
    </div>
  );
}

export default App;
