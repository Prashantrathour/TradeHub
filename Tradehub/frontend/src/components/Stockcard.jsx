import { Box, Flex, Image, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

function StockCard({ symbol }) {
  const [data, setData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=21Q868YD7GYTKXV0`
        );
        setData(response.data);
      } catch (error) {
        console.log("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, [symbol]);

  if (!data) {
    return (
      <Box textAlign="center" p={4}>
        <Spinner size="xl" color="blue.500" />
      </Box>
    );
  }

  const {
    Name,
    AnalystTargetPrice,
    RevenueTTM,
    MarketCapitalization,
    Sector,
    Description,
  } = data;

  const truncatedDescription = Description&&Description?.substring(0, 100);
  const shouldShowMore =Description&& (Description?.length > 100 && !showFullDescription);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

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
        <Image src={`https://companiesmarketcap.com/img/company-logos/64/${symbol}.webp`} alt={Name} boxSize="50px"  />
        <Text fontWeight="bold" fontSize="sm" mt={4}>
          {Name} ({symbol})
        </Text>
      </Flex>
      <Text float={"left"} p={2}>
        <strong>Price:</strong> ${AnalystTargetPrice}
      </Text>
      <Text float={"left"} p={2}>
        <strong>Revenue TTM($):</strong> {RevenueTTM}
      </Text>
      <Text float={"left"} p={2}>
        <strong>Market Cap:</strong> {MarketCapitalization}
      </Text>
      <Text float={"left"} p={2}>
        <strong>Sector:</strong> {Sector}
      </Text>
      <Text float={"left"} p={2} mt={4}>
        <strong>About:</strong>{" "}
        {shouldShowMore ? (
          <>
            {truncatedDescription}...
            <span onClick={toggleDescription} style={{ cursor: "pointer", color: "blue" }}>
              Read more
            </span>
          </>
        ) : (
          Description
        )}
      </Text>
    </Box>
  );
}

export default StockCard;
