import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import StocksPage from "../Page/Stockpage";
import StockExchangeGraph from "../components/Stockexchangegraph";
import StockBuyPage from "../Page/StockbuyPage";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stockdetail/:symbol" element={<StockExchangeGraph />} />
      <Route path="/stockpage" element={<StocksPage />} />
      <Route path="/stockbuypage/:symbol" element={<StockBuyPage />} />
    </Routes>
  );
}

export default MainRoute;
