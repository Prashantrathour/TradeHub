import React, { useEffect, useState } from "react";
import axios from "axios";
import createPlotlyComponent from "react-plotlyjs";
import Plotly from "plotly.js/dist/plotly-cartesian";
import { stockdata, stockdata2 } from "../Stockdata.js";
import {
  Box,
  Flex,
  Heading,
  MenuItemOption,
  MenuOptionGroup,
  Select,
} from "@chakra-ui/react";
import StockCard from "./Stockcard";
import ArticlePage from "./Articals";
import Article from "../Page/Artical";
import { Chip } from "@mui/material";
import TopStockPage from "./TopStock";
import { useParams } from "react-router-dom";
import StockGraph from "../Page/Bargraph";
import StockComponent from "./SellBuytab.jsx";

const Plot = createPlotlyComponent(Plotly);

function StockExchangeGraph() {
  const { symbol } = useParams();
  const [xvalues, setXValues] = useState([]);
  const [yvalues, setYValues] = useState([]);
  const [company, setCompany] = useState(symbol);
  const [companyName, setCompanyName] = useState("");
  const [companydata, setdata] = useState([]);

  const fetchStock = async () => {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${
        company || "AAPL"
      }&apikey=21Q868YD7GYTKXV0`
    );
    const data = response.data;
    setdata(data["Time Series (Daily)"]);

    let x = [];
    let y = [];

    for (var key in data["Time Series (Daily)"]) {
      x.push(key);
      y.push(data["Time Series (Daily)"][key]["1. open"]);
    }

    setYValues(y);
    setXValues(x);
  };

  let data = [
    {
      type: "scatter",
      x: xvalues,
      y: yvalues,
      mode: "lines+markers",
      marker: {
        color: "rgb(34, 236, 7)",
      },
    },
  ];

  let layout = {
    title: `Stock Graph of ${symbol}`,
    autosize: true,
    xaxis: {
      title: "Time",
    },
    annotations: [
      {
        text: "",
        x: 0,
        xref: "paper",
        y: 0,
        yref: "paper",
      },
    ],
  };

  let config = {
    showLink: false,
    displayModeBar: true,
  };

  useEffect(() => {
    setCompany(symbol);
    stockdata.filter((stock) => {
      if (stock.symbol === company) {
        setCompanyName(stock.name);
      }
    });
    fetchStock();
  }, [symbol, company]);

  return (
    <Box>
      {/* <Select value={company} onChange={selectHandler} width="200px" mb="4">
        {stockdata.map((stock) => (
          <option key={stock.symbol} value={stock.symbol}>
            {stock.name}
          </option>
        ))}
      </Select> */}
      <Flex direction={["column", "column", "row"]} m="10px">
        <Box m="10px" borderRadius="md" width="100%" overflow={"scroll"}>
          <Plot
            className="whatever"
            data={data}
            layout={layout}
            config={config}
          />
        </Box>
        <Box flex="1" ml={[0, 0, "20px"]} mt={["20px", "20px", 0]}>
          <TopStockPage />
        </Box>
      </Flex>
      <Flex
        m="10px"
        gap={"5px"}
        direction={["column", "column", "column", "row"]}
      >
        <Box width={"100%"} m="10px" border={"1px solid red"}>
          <StockGraph data={companydata} />
        </Box>
        <Box
          width={"100%"}
          m={"10px"}
          border={"1px solid gray"}
          borderRadius={"30px"}
        >
          {stockdata.map((stock) => {
            if (stock.symbol === company) {
              return <StockCard {...stock} symbol={symbol} />;
            } else {
              stockdata2.map((stock) => {
                if (stock.symbol === company) {
                  return <StockCard {...stock} />;
                }
              });
            }
          })}
          <Box>
            <StockComponent />
          </Box>
        </Box>
      </Flex>
      <Box m="10px">
        <Heading as="h4">Read Articles</Heading>
        <Article company={companyName} />
      </Box>
    </Box>
  );
}

export default StockExchangeGraph;
