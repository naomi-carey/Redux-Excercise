import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import Nav from "./Nav";

function App() {
  const counter = useSelector((state) => state.counter);
  const signedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Nav />
      {signedIn && <h1>Movie List</h1>}
    </div>
  );
}

export default App;
