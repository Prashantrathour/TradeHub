import { Box, Flex, Image, Text } from "@chakra-ui/react";

function StockCard({ symbol, name, price, quantity, marketCap, sector, imagelogo, description }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
   
      m={"50px"}
      bg="white"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Flex align="left" mb={4}>
        <Image src={imagelogo} alt={name} boxSize="50px" mr={4} />
        <Text fontWeight="bold" fontSize="xl">
          {name} ({symbol})
        </Text>
      </Flex>
      <Text>
        <strong>Price:</strong> ${price}
      </Text>
      <Text>
        <strong>Quantity:</strong> {quantity}
      </Text>
      <Text>
        <strong>Market Cap:</strong> {marketCap}
      </Text>
      <Text>
        <strong>Sector:</strong> {sector}
      </Text>
      <Text mt={4}>{description}</Text>
    </Box>
  );
}

export default StockCard;
