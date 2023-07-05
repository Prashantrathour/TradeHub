import axios from "axios";
import { GET_dematAccount_get_failure, GET_dematAccount_get_request, GET_dematAccount_get_success } from "./actiontype";
import Cookies from "js-cookie";


export const dematAccount_get = async (dispatch) => {
  const token = Cookies.get("token");
  dispatch(dematAccount_getRequest());
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
   return  await axios.get(
      `${process.env.REACT_APP_BASEURL}/demat`,config
    ).then((response)=>{
    
     dispatch(dematAccount_getSuccess(response.data)) 
    }).catch((error)=>{
      console.log(error)
        dispatch(dematAccount_getFailure())
    })
 
};

export const dematAccount_getRequest = () => {
  return { type: GET_dematAccount_get_request };
};

export const dematAccount_getSuccess = (payload) => {
  return { type: GET_dematAccount_get_success, payload };
};

export const  dematAccount_getFailure = () => {
  return { type: GET_dematAccount_get_failure,  };
};
