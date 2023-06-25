import axios from "axios";
import { SET_TOKEN, SET_USER, SET_LOGIN_STATUS } from "./actiontype";
import Cookies from "js-cookie";


export const loginuser = (userdata) => async (dispatch) => {
  return await axios.post(`${process.env.REACT_APP_BASEURL}/users/login`, userdata)   
};

// Action creators
export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setLoginStatus = (isLoggedIn,msg) => {
  return {
    type: SET_LOGIN_STATUS,
    payload: isLoggedIn,
    message:msg
  };
};
