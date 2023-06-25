const initialState = {
  token: null,
  user: null,
  isLoggedIn: false,

};

// Define the reducer function
export const reducer = (state = initialState, {type,payload,message}) => {
  switch (type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: payload
      };
    case "SET_USER":
      return {
        ...state,
        user: payload
      };
    case "SET_LOGIN_STATUS":
      return {
        ...state,
        isLoggedIn: payload,message:message
      };
    default:
      return state;
  }
};