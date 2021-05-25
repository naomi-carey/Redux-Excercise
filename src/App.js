import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter((addOne) => addOne + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((minusOne) => minusOne - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
