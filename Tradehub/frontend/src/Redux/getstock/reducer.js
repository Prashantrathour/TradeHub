import React from "react";
import {
  GET_STOCK_failure,
  GET_STOCK_request,
  GET_STOCK_success,
} from "./actiontype";

const initialstate = {
  stockdata:[],
  isloading: false,
  isError: false,
  page: 1,
  totalpage: null,
  limit: null
};
const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_STOCK_request:
      return { ...state, isloading: true };
    case GET_STOCK_success:
      return { ...state,isError: false, isloading: false, stockdata:payload.data.result,page:payload.data.page,limit:payload.data.limit,totalpage:payload.data.totalpage };
    case GET_STOCK_failure:
      return { ...state, isloading: false, isError: true,msg:payload };

    default:
      return state;
  }
};

export { reducer };
