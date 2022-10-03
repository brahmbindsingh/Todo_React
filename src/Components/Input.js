import React from "react";

const Input = (props) => {
  return (
      <input
        type="text"
        style={{width: "100%", margin: "30px 0", padding: "5px 10px"}}
        placeholder="Add New"
        value={props.text}
        onChange={(e) => props.handleInput(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.handleInpTask();
          }
        }}
      />
  );
};

export default Input;
