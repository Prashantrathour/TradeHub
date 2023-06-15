import logo from './logo.svg';
import './App.css';
import StockExchangeGraph from './components/Stockexchangegraph';
import Article from './Page/Artical';
import { Box, Tag } from "@chakra-ui/react";
import TopStockPage from './components/TopStock';
import MainRoute from './Routers/MainRoute';

function App() {
  return (
    <Box className="App">
   <MainRoute/>
    
    </Box>
  );
}

export default App;
