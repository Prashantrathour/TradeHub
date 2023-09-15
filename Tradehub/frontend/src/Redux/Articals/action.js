import axios from "axios";
import { GET_ARTICALS_failure, GET_ARTICALS_request, GET_ARTICALS_success } from "./actiontype";



export const getarticals = (symbol) => async (dispatch) => {
  dispatch(getarticalsRequest());
  function formatDateToDDMMYYYY(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
  
  function getFormattedDateSevenDaysAgo() {
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return formatDateToDDMMYYYY(sevenDaysAgo);
  }
  
  const formattedDate = getFormattedDateSevenDaysAgo();
  console.log(formattedDate);
  
   return  await axios.get(
      `https://newsapi.org/v2/everything?q=${symbol}&from=${formattedDate}&apiKey=10050605ad694f1f9108a5e7f52e779c`
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
