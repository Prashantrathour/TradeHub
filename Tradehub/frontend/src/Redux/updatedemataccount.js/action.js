import axios from "axios";
import { dematAccount_UPDATE_failure, dematAccount_UPDATE_request, dematAccount_UPDATE_success } from "./actiontype";
import Cookies from "js-cookie";


export const dematAccount_update = (data)=>async (dispatch) => {
  const token = Cookies.get("token");
  dispatch(dematAccount_UPDATERequest());
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
   return  await axios.post(
      `${process.env.REACT_APP_BASEURL}/demat/verify`,data,config
    )
 
};

export const dematAccount_UPDATERequest = () => {
  return { type: dematAccount_UPDATE_request };
};

export const dematAccount_UPDATESuccess = (payload) => {
  return { type: dematAccount_UPDATE_success, payload };
};

export const  dematAccount_UPDATEFailure = () => {
  return { type: dematAccount_UPDATE_failure,  };
};
