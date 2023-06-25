import axios from "axios";
import { GET_STOCKDETAILS_failure, GET_STOCKDETAILS_request, GET_STOCKDETAILS_success } from "./actiontype";



export const stock_getddetails = (symbol) => async (dispatch) => {
  dispatch(getstockdetailsRequest());

   return  await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${
        symbol || "AAPL"
      }&apikey=21Q868YD7GYTKXV0`
    ).then((response)=>{
      const data = response.data;
      
  console.log(data)
      let x = [];
      let y = [];
  
      for (var key in data["Time Series (Daily)"]) {
        x.push(key);
        y.push(data["Time Series (Daily)"][key]["1. open"]);
      }
      dispatch(getstockdetailsSuccess({x,y,companydata:data["Time Series (Daily)"]}))
    }).catch((error)=>{
        dispatch(getstockdetailsFailure())
    })
 
};

export const getstockdetailsRequest = () => {
  return { type: GET_STOCKDETAILS_request };
};

export const getstockdetailsSuccess = (payload) => {
  return { type: GET_STOCKDETAILS_success, payload };
};

export const  getstockdetailsFailure = () => {
  return { type: GET_STOCKDETAILS_failure,  };
};
