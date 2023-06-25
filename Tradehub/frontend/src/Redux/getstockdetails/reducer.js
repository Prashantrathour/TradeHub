import React from "react";
import {
  GET_STOCKDETAILS_failure,
  GET_STOCKDETAILS_request,
  GET_STOCKDETAILS_success,
} from "./actiontype";

const initialstate = {
  x:[],
  y:[],
  companydata:null,
  isloading: false,
  isError: false,
 
};
const reducer = (state = initialstate, { type, payload}) => {
  switch (type) {
    case GET_STOCKDETAILS_request:
      return { ...state, isloading: true };
    case GET_STOCKDETAILS_success:
      return { ...state,isError: false, isloading: false,x:payload.x,y:payload.y,companydata:payload.companydata};
    case GET_STOCKDETAILS_failure:
      return { ...state, isloading: false, isError: true,msg:payload };

    default:
      return state;
  }
};

export { reducer };
