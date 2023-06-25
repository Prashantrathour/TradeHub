// import React, { useEffect } from "react";

// import createPlotlyComponent from "react-plotlyjs";
// import Plotly from "plotly.js/dist/plotly-cartesian";

// import {
//   Box,
//   Flex,
//   Heading,

// } from "@chakra-ui/react";
// import StockCard from "../Components/Stockcard.jsx";
// import ArticlePage from "../Components/Articals.jsx";
// import Article from "../Components/Artical.jsx";

// import TopStockPage from "../Components/TopStock.jsx";
// import { useParams } from "react-router-dom";
// import StockGraph from "./Bargraph.jsx";
// import StockComponent from "../Components/SellBuytab.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import StockDataLoader from "./Loader.jsx";
// import { stock_getddetails } from "../Redux/getstockdetails/action.js";

// const Plot = createPlotlyComponent(Plotly);

// function StockExchangeGraph() {
//   const { symbol } = useParams();
// const dispatch=useDispatch()
// const {x,y,isloading,isError,companydata}=useSelector((store)=>store.getstockdetailsreducer)

//   let data = [
//     {
//       type: "scatter",
//       x,
//       y,
//       mode: "lines+markers",
//       marker: {
//         color: "rgb(34, 236, 7)",
//       },
//     },
//   ];
//   let layout = {
//     title: `Stock Graph of ${symbol}`,
//     autosize: true,
//     xaxis: {
//       title: "Time",
//     },
//     annotations: [
//       {
//         text: "",
//         x: 0,
//         xref: "paper",
//         y: 0,
//         yref: "paper",
//       },
//     ],
//   };

//   let config = {
//     showLink: false,
//     displayModeBar: true,
//   };
//   useEffect(() => {
//     dispatch(stock_getddetails(symbol))
//     console.log(x,y,isloading,isError,companydata)
//   }, [symbol,dispatch]);
//   return (
//     <Box>
//       <Flex direction={["column", "column", "row"]} m="10px">
//         <Box m="10px" borderRadius="md" width="100%" overflow={"scroll"}>
//        { <Plot
//             className="whatever"
//             data={data}
//             layout={layout}
//             config={config}
//           />} 
//         </Box>
//         <Box flex="1" ml={[0, 0, "20px"]} mt={["20px", "20px", 0]}>
//           <TopStockPage />
//         </Box>
//       </Flex>
//       <Flex
//         m="10px"
//         gap={"5px"}
//         direction={["column", "column", "column", "row"]}
//       >
//         <Box width={"100%"} m="10px" p="10px">
//           {!isloading?<StockGraph data={companydata} />:<StockDataLoader/>}
//         </Box>
//         <Box
//           width={"100%"}
//           m={"10px"}
//           border={"1px solid gray"}
//           borderRadius={"30px"}
//         >
//           <StockCard symbol={symbol} />

//           <Box>
//             <StockComponent />
//           </Box>
//         </Box>
//       </Flex>
//       <Box m="10px">
//         <Heading as="h4">Read Articles</Heading>
//         {/* <Article company={companyName} /> */}
//       </Box>
//     </Box>
//   );
// }

// export default StockExchangeGraph;
import React, { useEffect } from "react";
import createPlotlyComponent from "react-plotlyjs";
import Plotly from "plotly.js/dist/plotly-cartesian";
import { Box, Flex, Heading } from "@chakra-ui/react";
import StockCard from "../Components/Stockcard.jsx";
import ArticlePage from "../Components/Articals.jsx";
import Article from "../Components/Artical.jsx";
import TopStockPage from "../Components/TopStock.jsx";
import { useParams } from "react-router-dom";
import StockGraph from "./Bargraph.jsx";
import StockComponent from "../Components/SellBuytab.jsx";
import { useDispatch, useSelector } from "react-redux";
import StockDataLoader from "./Loader.jsx";
import { stock_getddetails } from "../Redux/getstockdetails/action.js";
import { useSearchParams } from "react-router-dom";
const Plot = createPlotlyComponent(Plotly);

function StockExchangeGraph() {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const { x, y, isloading, isError, companydata } = useSelector(
    (store) => store.getstockdetailsreducer
  );

  let data = [
    {
      type: "scatter",
      x,
      y,
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
    dispatch(stock_getddetails(symbol));
    console.log(x, y, isloading, isError, companydata);
  }, [symbol, dispatch]);

  return (
    <Box>
      {/* Stock Graph section */}
      <Flex direction={["column", "column", "row"]} m="10px">
        <Box m="10px" borderRadius="md" width="100%" overflow="scroll">
          <Plot
            className="stock-graph"
            data={data}
            layout={layout}
            config={config}
          />
        </Box>
        <Box flex="1" ml={[0, 0, "20px"]} mt={["20px", "20px", 0]}>
          <TopStockPage />
        </Box>
      </Flex>

      {/* Stock Data and Components section */}
      <Flex
        m="10px"
        gap="5px"
        direction={["column", "column", "column", "row"]}
      >
        <Box width="100%" m="10px" p="10px">
          {!isloading ? (
            <StockGraph data={companydata} />
          ) : (
            <StockDataLoader />
          )}
        </Box>
        <Box
          width="100%"
          m="10px"
          border="1px solid gray"
          borderRadius="30px"
        >
          <StockCard symbol={symbol} />
          <Box>
            <StockComponent />
          </Box>
        </Box>
      </Flex>

      {/* Articles section */}
      <Box m="10px">
        <Heading as="h4">Read Articles</Heading>
        <Article company={symbol} />
      </Box>
    </Box>
  );
}

export default StockExchangeGraph;
