import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text, Fade, Spinner } from "@chakra-ui/react";
import { motion } from "framer-motion";

const CompanyReview = ({ symbol }) => {
  const [data, setData] = useState(null);

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
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
        <Spinner size="xl" color="blue.500" />
      </Box>
    );
  }

  const {
    Symbol,
    AssetType,
    Name,
    Description,
    Exchange,
    Country,
    Sector,
    Industry,
    MarketCapitalization,
    PERatio,
    DividendYield,
    RevenueTTM,
    ProfitMargin,
    ReturnOnEquityTTM,
    AnalystTargetPrice,
    SharesOutstanding,
    DividendDate,
  } = data;

  return (
    <Box boxSize={"-webkit-fit-content"} marginTop={"30px"}>
      <Fade in={true}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Box p={4} borderRadius="md" boxShadow="lg" bg="white">
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {Name} ({Symbol})
            </Text>
            <Text mb={2} textAlign="left" overflowWrap={"break-word"}>
              <strong>About Company:</strong> {Description}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Asset Type:</strong> {AssetType}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Exchange:</strong> {Exchange}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Country:</strong> {Country}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Sector:</strong> {Sector}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Industry:</strong> {Industry}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Market Capitalization($):</strong> {MarketCapitalization}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>P/E Ratio:</strong> {PERatio}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Dividend Yield:</strong> {DividendYield}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Revenue TTM($):</strong> {RevenueTTM}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Profit Margin:</strong> {ProfitMargin}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Return on Equity TTM:</strong> {ReturnOnEquityTTM}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Analyst Target Price($):</strong> {AnalystTargetPrice}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Shares Outstanding:</strong> {SharesOutstanding}
            </Text>
            <Text mb={2} textAlign="left">
              <strong>Dividend Date:</strong> {DividendDate}
            </Text>
          </Box>
        </motion.div>
      </Fade>
    </Box>
  );
};

export default CompanyReview;
