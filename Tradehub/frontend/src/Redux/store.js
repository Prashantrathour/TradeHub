import { applyMiddleware, legacy_createStore } from "redux";
import reducer from "./buystock/reducer";
import thunk from "redux-thunk";
const rootreducer=combineReducer({reducer})
export const store = legacy_createStore(rootreducer,applyMiddleware(thunk));