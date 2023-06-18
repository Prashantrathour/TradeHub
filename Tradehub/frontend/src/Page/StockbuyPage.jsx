import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  ChakraProvider,
  extendTheme,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";
import { useParams } from "react-router-dom";
import axios from "axios";
import CompanyReview from "./Comapnyreview";

// Remove the type information for the theme and options
const theme = extendTheme({
  colors: {
    brand: {
      500: "#3182CE",
    },
  },
});

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const StockBuyPage = () => {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderType, setOrderType] = useState("");
  const { symbol: stockSymbol } = useParams();

  const fetchStock = async () => {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${
        symbol || "AAPL"
      }&apikey=21Q868YD7GYTKXV0`
    );
    const data = response.data;
    console.log(data);
    // setdata(data["Time Series (Daily)"]);

    let x = [];
    let y = [];

    for (var key in data["Time Series (Daily)"]) {
      x.push(key);
      y.push(data["Time Series (Daily)"][key]["1. open"]);
    }

    // setYValues(y);
    // setXValues(x);
  };
  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleOrderTypeChange = (event) => {
    setOrderType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process the form data (e.g., submit an API request to buy the stock)

    // Reset the form
    setSymbol("");
    setQuantity("");
    setOrderType("");
  };

  // Dummy stock data
  const stockData = [
    { symbol: "AAPL", companyName: "Apple Inc.", price: 150.25 },
    { symbol: "GOOGL", companyName: "Alphabet Inc.", price: 2525.75 },
    { symbol: "MSFT", companyName: "Microsoft Corporation", price: 300.5 },
  ];
  useEffect(() => {
    fetchStock();
    setSymbol(stockSymbol);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={4}
      bg="gray.100"
    >
      <ChakraProvider theme={theme}>
        <Box
          maxW="md"
          width="100%"
          mt={8}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg="white"
        >
          <form onSubmit={handleSubmit}>
            <FormControl id="quantity" mb={4}>
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                bg="gray.100"
                border="none"
                _focus={{ outline: "none" }}
              />
            </FormControl>

            <FormControl id="orderType" mb={4}>
              <FormLabel>Order Type</FormLabel>
              <Select
                value={orderType}
                onChange={handleOrderTypeChange}
                bg="gray.100"
                border="none"
                _focus={{ outline: "none" }}
              >
                <option value="market">Market</option>
                <option value="limit">Limit</option>
              </Select>
            </FormControl>

            <Stack direction="row" justify="space-between" align="center">
              <Text fontWeight="bold" fontSize="lg">
                Total Price: $
                {quantity *
                  stockData.find((stock) => stock.symbol === symbol)?.price ||
                  0}
              </Text>
              <Button type="submit" colorScheme="brand" variant="solid">
                Buy Stock
              </Button>
            </Stack>
          </form>
        </Box>

        <Flex width="100%" mt={8}>
          <Box width={"100%"}>
            <Box>
              <Image
                src={`https://companiesmarketcap.com/img/company-logos/64/${stockSymbol}.webp`}
                alt={"name"}
                boxSize="100px"
              />
            </Box>
            <Box>
              <StockChart symbol={stockSymbol} />
            </Box>
          </Box>
          <Box width={"100%"}>
            <CompanyReview symbol={stockSymbol} />
          </Box>
        </Flex>
      </ChakraProvider>
    </Box>
  );
};

export default StockBuyPage;

export function StockChart({ symbol }) {
  const [stockData, setStockData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.polygon.io/v1/indicators/sma/${symbol}?timespan=day&adjusted=true&window=50&series_type=close&order=desc&apiKey=vxfc__WOcycQoCzWYMHXUvJGcsi3xkCc`
      );
      const data = await response.json();
      const values = data.results.values;
      setStockData(values);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [symbol]);

  const timestamps = stockData?.map((data) => new Date(data.timestamp));
  const labels = timestamps.map((timestamp) => {
    const options = { day: "2-digit", month: "short" };
    return timestamp.toLocaleDateString("en-US", options);
  });

  const stockValues = stockData?.map((data) => data.value);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: stockValues,
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "rgb(75, 192, 192)",
        data: stockValues,
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  const chartRef = useRef(null);

  const onClick = (event) => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  };

  const printDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;

    console.log(elements.length);
  };

  return (
    <Box>
      <Heading as={"h4"}> Current Month Analysis</Heading>
      <Chart
        ref={chartRef}
        type="bar"
        onClick={onClick}
        options={options}
        data={data}
      />
    </Box>
  );
}
