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
  useToast,
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
import { useDispatch, useSelector } from "react-redux";
import { buystock_post } from "../Redux/buystock/action";

import {

  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";
import PaymentPopup from "./PPaaymentpage";
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
  const [symbolstock, setSymbol] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderType, setOrderType] = useState("");
  const [stockData, setstockdata] = useState(1);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const { symbol } = useParams();
  const toast = useToast();
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
  };
  const fetchtargetStock = async () => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${
          symbol || "AAPL"
        }&apikey=21Q868YD7GYTKXV0`
      );

      const data =
        response.data["Time Series (Daily)"]["2023-06-16"]["4. close"];

      console.log(data, symbol);
      setstockdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = async (event) => {
    setQuantity(event.target.value);
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  

  useEffect(() => {
    fetchStock();
    fetchtargetStock();
    setSymbol(symbol);
  }, [symbol]);

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
              <Text>
                <strong>Price(per stock):-</strong>
                {stockData}
              </Text>
              <Input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                bg="gray.100"
                border="none"
                _focus={{ outline: "none" }}
              />
            </FormControl>

            <Stack direction="row" justify="space-between" align="center">
              <Text fontWeight="bold" fontSize="lg">
                Total Price: ${quantity * stockData || 0}
              </Text>
              <Button
                onClick={handleOpenPopup}
                type="submit"
                colorScheme="brand"
                variant="solid"
              >
                Buy Stock
              </Button>

              {/* Payment Popup */}
              <Modal isOpen={isOpen} onClose={handleClosePopup}>
                <ModalOverlay />
                <ModalContent>
                  <PaymentPopup
                    onClose={handleClosePopup}
                   
                    stockdata={{stockSymbol:symbol,quantity: quantity,averagePrice: +stockData}}
                  />
                  <ModalFooter>
                    <Button onClick={handleClosePopup}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Stack>
          </form>
        </Box>

        <Flex
          width="100%"
          mt={8}
          flexDirection={["column", "column", "column", "row"]}
        >
          <Box width={"50%"} m="10">
            <Box>
              <Image
                src={`https://companiesmarketcap.com/img/company-logos/64/${symbol}.webp`}
                alt={"name"}
                boxSize="100px"
              />
            </Box>
            <Box width="100%">
              <StockChart symbol={symbol} />
            </Box>
          </Box>
          <Box m="10px" maxWidth={"100%"} boxSizing={"border-box"}>
            <CompanyReview symbol={symbol} />
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
