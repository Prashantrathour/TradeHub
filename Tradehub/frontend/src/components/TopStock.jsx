import { Box, Text, Fade } from "@chakra-ui/react";
import { motion } from "framer-motion";

const stocks = [
  { name: "UBER", price: 41.09, change: "-0.51%" },
  { name: "SBUX", price: 99.99, change: "+0.43%" },
  { name: "DIS", price: 94.115, change: "-0.15%" },
  { name: "MSFT", price: 337.65, change: "+0.99%" },
  { name: "AAPL", price: 184.07, change: "+0.38%" },
  { name: "BABA", price: 89.26, change: "+1.47%" },
  { name: "TSLA", price: 258.1001, change: "-0.80%" },
];

function TopStockPage() {
  return (
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Stocks
      </Text>
      <Box>
        {stocks.map((stock, index) => (
          <Fade key={index} in={true} delay={index * 0.1}>
            {(styles) => (
              <motion.div style={styles}>
                <Box
                  py="2"
                  borderWidth="1px"
                  borderRadius="md"
                  p="4"
                  shadow="md"
                  bg="black"
                >
                  <Text fontWeight="bold">{stock.name}</Text>
                  <Text>{stock.price}</Text>
                  <Text
                    color={stock.change.includes("-") ? "red" : "green"}
                    fontWeight="bold"
                  >
                    {stock.change}
                  </Text>
                </Box>
              </motion.div>
            )}
          </Fade>
        ))}
      </Box>
    </Box>
  );
}
export default TopStockPage;