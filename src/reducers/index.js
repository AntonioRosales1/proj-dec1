import counterReducer from "./counter";
import loggedReduccer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : loggedReduccer
});

export default allReducers;