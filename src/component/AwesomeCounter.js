import { addComments } from "@babel/types";
import React from "react";
import { useState } from "react";

const AwesomeCounter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue ?? 0);
  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const remove = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Awesome Counter</h1>
      <button onClick={remove}>Remove</button>
      <span>{count}</span>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AwesomeCounter;
