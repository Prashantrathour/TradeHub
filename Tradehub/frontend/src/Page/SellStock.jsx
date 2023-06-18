import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StockSellingPage = () => {
  const { symbol } = useParams();
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getholding = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/demat/holding`,
        config
      );
      console.log(response.data);
      setStocks(response.data);
    } catch (error) {}
  };
const selecthandle=(e)=>{
    setSelectedStock(e.target.value)
    const currentprice=stocks.find(stock=>stock.stockSymbol==e.target.value)
    setPrice(currentprice.averagePrice)
    console.log(price)
}
  useEffect(() => {
    getholding();
    
  }, []);

  const handleSell = (e) => {
    e.preventDefault();
    // Handle stock selling logic
    // Update stock quantities or make API calls
    console.log(`Selling stock: ${selectedStock}`);
  };

  return (
    <>
    {stocks.length > 0?<Container maxW="lg" py={8}>
      <Box mb={8}>
        <Heading as="h1" size="lg" textAlign="center">
          Stock selling
        </Heading>
      </Box>
      <Stack spacing={4} mt={4}>
        <Text>Current Price:<strong>{Math.floor(price+Math.random()*10)}</strong></Text>
        <Text></Text>
        <FormControl>
          <FormLabel>Select a stock to sell:</FormLabel>
          <Select
            value={selectedStock}
            onChange={selecthandle}
          >
            {stocks.map((stock) => (
              <option key={stock.stockSymbol} value={stock.stockSymbol}>
                {stock.stockSymbol}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Quantity:</FormLabel>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Buy Price:</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
         disabled
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          alignSelf="flex-start"
          onClick={handleSell}
        >
          Sell
        </Button>
      </Stack>
    </Container>:<Heading>{"No Stock in your account"}</Heading>}
    </>
  );
};

export default StockSellingPage;
