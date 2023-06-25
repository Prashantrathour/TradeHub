import axios from "axios";
import { GET_STOCK_failure, GET_STOCK_request, GET_STOCK_success } from "./actiontype";
import Cookies from "js-cookie";


export const stock_get = (stocksPerPage,currentPage) => async (dispatch) => {
  dispatch(getstockRequest());

   return  await axios.get(
      `${process.env.REACT_APP_BASEURL}/stocks?limit=${stocksPerPage||10}&page=${currentPage||1}`
    ).then((response)=>{
    
     dispatch(getstockSuccess(response)) 
    }).catch((error)=>{
        dispatch(getstockFailure())
    })
 
};

export const getstockRequest = () => {
  return { type: GET_STOCK_request };
};

export const getstockSuccess = (payload) => {
  return { type: GET_STOCK_success, payload };
};

export const  getstockFailure = () => {
  return { type: GET_STOCK_failure,  };
};
