import { useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, Spinner, useBreakpointValue } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const HistoryPage = () => {
    const navigate=useNavigate()
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = Cookies.get("token");
  useEffect(() => {
    if(!token){
navigate("/login")
    }
    const fetchStocks = async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
      try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASEURL}/demat/transactions`,
            config
          );
        setStocks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stocks:', error);
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);
  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust the locale or format as needed
  };
  const cardWidth = useBreakpointValue({ base: '100%', sm: '45%', md: '30%', lg: '22%' });


  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Stock History</Heading>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Box>
        {stocks.length>0?<Flex flexWrap="wrap">
          {stocks.map((stock) => (
            <Box
              key={stock.date}
              borderWidth={1}
              borderRadius="md"
              p={4}
              m={2}
              width={cardWidth}
              boxShadow="md"
              transition="box-shadow 0.2s"
              _hover={{ boxShadow: 'lg' }}
            >
              <Text fontSize="lg" fontWeight="bold" mb={2}>{stock.stockSymbol}</Text>
              <Text fontSize="md">Date: {convertTimestampToDate(stock.date)}</Text>
              <Text fontSize="md">Quantity: {stock.quantity}</Text>
              <Text fontSize="md">Price: {stock.price}</Text>
              <Text fontSize="md">Total Amount: {stock.totalAmount}</Text>
            </Box>
          ))}
        </Flex>:<Box><Heading>No Stock Found</Heading></Box>}
        </Box>
      )}
    </Box>
  );
};

export default HistoryPage;
