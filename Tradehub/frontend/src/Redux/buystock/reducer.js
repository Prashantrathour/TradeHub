import React from "react";
import {
  BUY_STOCK_failure,
  BUY_STOCK_request,
  BUY_STOCK_success,
} from "./actiontype";

const initialstate = {
//   stockdata: {
//     stockSymbol: "",
//     averagePrice: "",
//     quantity: "",
//   },
  isloading: false,
  isError: false,
  msg: "",
};
const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case BUY_STOCK_request:
      return { ...state, isloading: true };
    case BUY_STOCK_success:
      return { ...state, isloading: false, msg:payload };
    case BUY_STOCK_failure:
      return { ...state, isloading: false, isError: true,msg:payload };

    default:
      return state;
  }
};

export { reducer };
