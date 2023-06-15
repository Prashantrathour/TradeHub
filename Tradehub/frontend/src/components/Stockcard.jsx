import { Box, Flex, Image, Text } from "@chakra-ui/react";

function StockCard({ symbol, name, price, quantity, marketCap, sector, imagelogo, description }) {
    console.log(symbol,name)
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
   
      boxShadow="lg"
      m="auto"
      bg="yellow.200"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)" }}
      width="90%"
     
    display={"flex"}
    flexDirection={"column"}

    >
      <Flex align="left" mb={4} p={2} justifyContent={"space-around"} direction={["column", "row", "row"]}>
        <Image src={`https://companiesmarketcap.com/img/company-logos/64/${symbol}.webp`} alt={name} boxSize="50px"  />
        <Text fontWeight="bold" fontSize="sm" mt={4}>
          {name} ({symbol})
        </Text>
      </Flex>
      <Text  float={"left"} p={2}>
        <strong>Price:</strong> ${price}
      </Text>
      <Text  float={"left"} p={2}>
        <strong>Quantity:</strong> {quantity}
      </Text>
      <Text  float={"left"} p={2}>
        <strong>Market Cap:</strong> {marketCap}
      </Text>
      <Text  float={"left"} p={2}>
        <strong>Sector:</strong> {sector}
      </Text>
      <Text  float={"left"} p={2} mt={4}>
       <strong> About: - </strong>{description}
      </Text>
    </Box>
  );
}

export default StockCard;
