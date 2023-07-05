import React from "react";
import {
  dematAccount_UPDATE_failure,
  dematAccount_UPDATE_request,
  dematAccount_UPDATE_success,
} from "./actiontype";

const initialstate = {
 
  loading: false,
  error: false,

};
const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case dematAccount_UPDATE_request:
      return { ...state, isloading: true };
    case dematAccount_UPDATE_success:
      return { ...state,isError: false, isloading: false,data:payload };
    case dematAccount_UPDATE_failure:
      return { ...state, isloading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };
