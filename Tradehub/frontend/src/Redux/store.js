import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as buyreducer}  from "./buystock/reducer";
import {reducer as articalreducer}  from "./Articals/reducer";
import { reducer as loginreducer } from "./uselogin/reducer";
import { reducer as getstockreducer } from "./getstock/reducer";
import { reducer as getstockdetailsreducer } from "./getstockdetails/reducer";
import { reducer as dematAccount_getreducer } from "./getdemataccount/reducer";
import { reducer as dematAccount_veriify_reducer } from "./updatedemataccount.js/reducer";
import thunk from "redux-thunk";
const rootreducer=combineReducers({buyreducer,dematAccount_veriify_reducer,articalreducer,loginreducer,getstockreducer,getstockdetailsreducer,dematAccount_getreducer})
export const store = legacy_createStore(rootreducer,applyMiddleware(thunk));