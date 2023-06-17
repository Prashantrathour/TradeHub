import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import StocksPage from "../Page/Stockpage";
import StockExchangeGraph from "../components/Stockexchangegraph";
import StockBuyPage from "../Page/StockbuyPage";
import Middle from "../components/Middle";
import SupportPage from "../Page/Supportpage";
import Learn from "../Page/Learn";
import Snacks from "../Page/Snacksarticals";



function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Middle />} />
      <Route path="/invest" element={<Home />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/snacks" element={< Snacks/>} />
      <Route path="/stockdetail/:symbol" element={<StockExchangeGraph />} />
      <Route path="/stockpage" element={<StocksPage />} />
      <Route path="/stockbuypage/:symbol" element={<StockBuyPage />} />
    </Routes>
  );
}

export default MainRoute;
