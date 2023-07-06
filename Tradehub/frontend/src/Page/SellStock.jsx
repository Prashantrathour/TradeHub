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
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const StockSellingPage = () => {
  const { symbol } = useParams();
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
const navigate=useNavigate()
  const toast=useToast()
const token = Cookies.get("token");
console.log(token,"token")
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
    
}


const handleSell = async(e) => {
  e.preventDefault();
  try {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  
  console.log(`Selling stock: ${selectedStock}`);
  const res=await axios.post(`${process.env.REACT_APP_BASEURL}/demat/sell`,{stockSymbol:selectedStock,quantity},config)
  toast({
    title:"Successfully",
    description:res.data.msg,
    status:"success"
})
} catch (error) {
  console.log({stockSymbol:selectedStock,quantity:quantity})
  console.log(error)
  toast({
    title:"error",
    description:error?.response?.data?.msg,
    status:"error"
  })
  if(error.response.data.verify){
    navigate("/verify_account")
  }
}

  };
  useEffect(() => {
    if(!token){
      navigate("/login")
      return
    }

    getholding();
    
  }, []);
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
          <option value="">select stock:</option>
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
    </Container>:<Heading p="20px">{"No Stock in your account"}</Heading>}
    </>
  );
};

export default StockSellingPage;
