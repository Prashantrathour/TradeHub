import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import StocksPage from "../Page/Stockpage";
// import StockExchangeGraph from "../components/Stockexchangegraph";
import StockBuyPage from "../Page/StockbuyPage";
import Middle from "../Components/Middle.jsx";
import SupportPage from "../Page/Supportpage";
import Learn from "../Page/Learn";
import Snacks from "../Page/Snacksarticals";
import Login from "../Page/Login";
import Signup from "../Page/Signup";
import CreateDematAccountPage from "../Page/CreateDemateAccount";
import StockSellingPage from "../Page/SellStock";
import { Heading } from "@chakra-ui/react";
import NotFoundPage from "../Page/Pagenotfound";
import StockExchangeGraph from "../Page/Stockexchangegraph.jsx";
import ErrorPage from "../Page/Errorpage";
import NoDataFoundPage from "../Page/NodataFoundpage";
import Update_demate_account from "../Page/Update_demate_account";
import Verify_account from "../Page/Verify-account";



function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Middle />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/nodatafound" element={<NoDataFoundPage />} />
      <Route path="/verify_account" element={<Verify_account />} />
      <Route path="/update_account" element={<Update_demate_account />} />
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
