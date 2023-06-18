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
import Login from "../Page/Login";
import Signup from "../Page/Signup";
import CreateDematAccountPage from "../Page/CreateDemateAccount";
import StockSellingPage from "../Page/SellStock";
import { Heading } from "@chakra-ui/react";
import NotFoundPage from "../Page/Pagenotfound";



function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Middle />} />
      <Route path="/invest" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/demateaccount" element={<CreateDematAccountPage />} />
      <Route path="/snacks" element={< Snacks/>} />
      <Route path="/stockdetail/:symbol" element={<StockExchangeGraph />} />
      <Route path="/stockpage" element={<StocksPage />} />
      <Route path="/stockbuypage/:symbol" element={<StockBuyPage />} />
      <Route path="/stocksellpage/:symbol" element={<StockSellingPage />} />
      <Route path="/stocks/allstocks" element={<Heading>This page is unde construction</Heading>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default MainRoute;
