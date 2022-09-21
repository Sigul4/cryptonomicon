import { combineReducers } from "redux";
import { currencyReducer } from "./currencyReducer";
import   promiseReducer    from "./promiseReducer";

const combinedReducers = combineReducers({currency: currencyReducer, promise: promiseReducer})

export default combinedReducers
