import React from "react";
import {
  GET_dematAccount_get_failure,
  GET_dematAccount_get_request,
  GET_dematAccount_get_success,
} from "./actiontype";

const initialstate = {
  data:[],
  isloading: false,
  isError: false,

};
const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_dematAccount_get_request:
      return { ...state, isloading: true };
    case GET_dematAccount_get_success:
      return { ...state,isError: false, isloading: false,data:payload };
    case GET_dematAccount_get_failure:
      return { ...state, isloading: false, isError: true,msg:payload };

    default:
      return state;
  }
};

export { reducer };
