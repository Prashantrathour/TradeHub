import React from "react";
import {
  GET_ARTICALS_failure,
  GET_ARTICALS_request,
  GET_ARTICALS_success,
} from "./actiontype";

const initialstate = {

  article:'',
  isloading: false,
  isError: false,
 
};
const reducer = (state = initialstate, { type, payload}) => {
  switch (type) {
    case GET_ARTICALS_request:
      return { ...state, isloading: true };
    case GET_ARTICALS_success:
      return { ...state,isError: false, isloading: false,article:payload};
    case GET_ARTICALS_failure:
      return { ...state, isloading: false, isError: true,msg:payload };

    default:
      return state;
  }
};

export { reducer };
