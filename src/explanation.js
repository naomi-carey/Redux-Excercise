//Explanation w/out react performed in the index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

//STORE -> is a globalized state

//ACTION -> describes what we are going to do...just a function that returns what you want to do.  The logic does not actually get added here.
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

//REDUCER ->  (logic done here) another function that filters out the actions..Reducer takes a look at the Action and based on what the Action is, it will modify the state.
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counterReducer);

//THIS IS NOT HOW WE WILL DO IT IN REACT JUST FOR LEARNING PURPOSE.

store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());

//DISPATCH -> Actually sends the "Action" to the "Reducer" (The "Implentation/Fire" button.)
// DISPATCH("INCREMENT");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
