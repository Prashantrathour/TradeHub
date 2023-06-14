import logo from './logo.svg';
import './App.css';
import StockExchangeGraph from './components/Stockexchangegraph';
import Article from './Page/Artical';
import { Box, Tag } from "@chakra-ui/react";
import TopStockPage from './components/TopStock';

function App() {
  return (
    <Box className="App">
   
     <Tag size="md" colorScheme="blue" borderRadius="full">
      Technology | Sport | Science
    </Tag>

      <StockExchangeGraph/>
    
    </Box>
  );
}

export default App;
