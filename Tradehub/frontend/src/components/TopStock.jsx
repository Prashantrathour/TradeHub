import { Box, Text, Fade, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const stocks = [
  { id: 1, name: "UBER", price: 41.09, change: "-0.51%" },
  { id: 2, name: "SBUX", price: 99.99, change: "+0.43%" },
  { id: 3, name: "DIS", price: 94.115, change: "-0.15%" },
  { id: 4, name: "MSFT", price: 337.65, change: "+0.99%" },
  { id: 5, name: "AAPL", price: 184.07, change: "+0.38%" },
  { id: 6, name: "BABA", price: 89.26, change: "+1.47%" },
  { id: 7, name: "TSLA", price: 258.1001, change: "-0.80%" },
  { id: 8, name: "GOOGL", price: 2803.98, change: "+0.79%" },
  { id: 9, name: "NFLX", price: 552.78, change: "-0.20%" },
  { id: 10, name: "AMZN", price: 3295.99, change: "+0.61%" },
  { id: 11, name: "FB", price: 331.26, change: "+0.94%" },
  { id: 12, name: "NVDA", price: 786.51, change: "+1.73%" },
  { id: 13, name: "AMD", price: 81.75, change: "-0.12%" },
  { id: 14, name: "PYPL", price: 284.27, change: "-0.17%" },
  { id: 15, name: "INTC", price: 54.63, change: "+0.10%" },
  { id: 16, name: "SQ", price: 228.45, change: "+1.29%" },
  { id: 17, name: "CRM", price: 251.12, change: "-0.35%" },
  { id: 18, name: "IBM", price: 141.05, change: "-0.25%" },
  { id: 19, name: "JPM", price: 162.52, change: "+0.76%" },
  { id: 20, name: "V", price: 232.13, change: "+0.68%" },
];

function TopStockPage() {
  const [page, setPage] = useState(1);
  const [selectedStock, setSelectedStock] = useState(null);
  const navigate=useNavigate()
let [searchParams, setSearchParams] = useSearchParams();
  const stocksPerPage = 5;
  const startIndex = (page - 1) * stocksPerPage;
  const endIndex = startIndex + stocksPerPage;
  const visibleStocks = stocks.slice(startIndex, endIndex);

  const handleStockClick = (stock) => {
    setSelectedStock(stock);
   
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };
useEffect(()=>{
  
},[selectedStock])
  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4" textAlign="center">
        ---- Top Popular Stocks ----
      </Text>
      <Box display="flex" flexDirection="column" alignItems="center">
        {visibleStocks.map((stock) => (
          <Fade key={stock.id} in={true} delay={stock.id * 0.1}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                py="2"
                borderWidth="1px"
                borderRadius="md"
                p="4"
                shadow="md"
                bg={selectedStock === stock ? "gray.200" : "white"}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width={["200px","200px","300px","300px"]}
                cursor="pointer"
                _hover={{ bg: "gray.200" }}
                onClick={() => handleStockClick(stock)}
              >
                <Box>
                  <Text fontWeight="bold">{stock.name}</Text>
                </Box>
                <Box>
                  <Text fontSize="lg">{stock.price}</Text>
                  <Text
                    fontSize="sm"
                    color={stock.change.includes("-") ? "red" : "green"}
                    fontWeight="bold"
                  >
                    {stock.change}
                  </Text>
                </Box>
              </Box>
            </motion.div>
          </Fade>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" mt="4">
        {page > 1 && (
          <Button mx="2" onClick={handlePreviousPage}>
            Previous
          </Button>
        )}
        {endIndex < stocks.length && (
          <Button mx="2" onClick={handleNextPage}>
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default TopStockPage;
