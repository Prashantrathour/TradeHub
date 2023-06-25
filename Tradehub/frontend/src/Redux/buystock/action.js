import axios from "axios";
import { BUY_STOCK_failure, BUY_STOCK_request, BUY_STOCK_success } from "./actiontype";
import Cookies from "js-cookie";


export const buystock_post = (stockdata) => async (dispatch) => {
  dispatch(buystockRequest());

  const token = Cookies.get("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };


   return await axios.post(`${process.env.REACT_APP_BASEURL}/demat/buy`,stockdata,config)
};

export const buystockRequest = () => {
  return { type: BUY_STOCK_request };
};

export const buystockSuccess = (payload) => {
  return { type: BUY_STOCK_success, payload };
};

export const buystockFailure = (payload) => {
  return { type: BUY_STOCK_failure, payload };
};
