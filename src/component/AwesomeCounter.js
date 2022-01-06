import React from "react";

const AwesomeCounter = ({ initialValue }) => {
  return (
    <div>
      <h1>Awesome Counter</h1>
      <span>{initialValue ?? 0}</span>
    </div>
  );
};

export default AwesomeCounter;
