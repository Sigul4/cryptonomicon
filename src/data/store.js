import { createStore, applyMiddleware } from "redux";
import combinedReducers                 from "../reducers/combineReducers.js";     
import thunk                            from "redux-thunk";

const store = createStore(combinedReducers, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()));

export default store;
