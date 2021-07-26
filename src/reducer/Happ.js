import {processReducers}from "./Prrocess";
import {combineReducers}from "redux";

 const rootReducers= combineReducers({processReducers:processReducers,})
 export default rootReducers;
