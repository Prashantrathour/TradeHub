import React, { useEffect, useState } from "react";
import axios from "axios";
import createPlotlyComponent from "react-plotlyjs";
import Plotly from "plotly.js/dist/plotly-cartesian";
import stockdata from "../Stockdata";
import { Box, MenuItemOption, MenuOptionGroup, Select } from "@chakra-ui/react";
import StockCard from "./Stockcard";
import ArticlePage from "./Articals";
import Article from "../Page/Artical";

import { Chip } from "@mui/material";
const Plot = createPlotlyComponent(Plotly);

function StockExchangeGraph() {
  const [xvalues, setXValues] = useState([]);
  const [yvalues, setYValues] = useState([]);
  const [company, setcompany] = useState("AAPL");
  const [companyname, setcompanyname] = useState("");
  const fetchStock = async () => {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${
        company || "AAPL"
      }&apikey=21Q868YD7GYTKXV0`
    );
    const data = response.data;
    let x = [];
    let y = [];

    for (var key in data["Time Series (Daily)"]) {
      x.push(key);
      y.push(data["Time Series (Daily)"][key]["1. open"]);
    }

    setXValues(x);
    setYValues(y);
  };


 
  let data = [
    {
      type: "scatter",
      x: xvalues,
      y: yvalues,
      mode: "lines+markers",
      marker: {
        color: "rgb(243, 19, 19)",
      },
    },
  ];

  let layout = {
    title: "Stock Graph",
    width:720,
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
  const selecthandler = (e) => {
    setcompany(e.target.value);

    console.log(e.target.name);
  };
  useEffect(() => {


    stockdata.filter((stock) => {
        if (stock.symbol === company) {
    
         setcompanyname(stock.name)
        }
      })
    fetchStock();
  }, [company]);


  console.log(companyname)
  return (
    <Box>
        
      <Box>
        <select onChange={selecthandler}>
          {stockdata.map((stock) => (
            <option value={stock.symbol}>{stock.name}</option>
          ))}
        </select>
        <Plot
          className="whatever"
          data={data}
          layout={layout}
          config={config}
        />
      </Box>
       <Box>
        {stockdata.map((stock) => {
          if (stock.symbol === company) {
      
            return <StockCard {...stock} />;
          }
        })}
      </Box> 
     <Article company={companyname}/>
  
    </Box>
  );
}

export default StockExchangeGraph;
