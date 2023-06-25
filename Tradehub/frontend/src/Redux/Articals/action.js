import axios from "axios";
import { GET_ARTICALS_failure, GET_ARTICALS_request, GET_ARTICALS_success } from "./actiontype";



export const getarticals = (symbol) => async (dispatch) => {
  dispatch(getarticalsRequest());

   return  await axios.get(
      `https://newsapi.org/v2/everything?q=${symbol}&from=2023-06-13&apiKey=10050605ad694f1f9108a5e7f52e779c`
    ).then((response)=>{
      const data = response.data?.articles
      
      console.log(data)
      dispatch(getarticalsSuccess(data))
    }).catch((error)=>{
        dispatch(getarticalsFailure())
    })
 
};

export const getarticalsRequest = () => {
  return { type: GET_ARTICALS_request };
};

export const getarticalsSuccess = (payload) => {
  return { type: GET_ARTICALS_success, payload };
};

export const  getarticalsFailure = () => {
  return { type: GET_ARTICALS_failure,  };
};
