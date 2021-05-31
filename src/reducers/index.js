import counterReducer from "../reducers/counter";
import loggedReducer from "../reducers/isLogged";
import { combineReducers } from "redux";

//The below is what shows up in state
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
