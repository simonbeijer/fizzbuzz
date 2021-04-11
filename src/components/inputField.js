import React, { useState } from "react";

const InputField = ({ getInput }) => {
  const [inputValue, setInputValue] = useState("");
  const submit = (e) => {
    e.preventDefault();
    getInput(inputValue);
    setInputValue("");
  };

  return (
    <div
      style={{
        background: "#EBEBEB",
        height: "80px",
        width: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={submit}>
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          style={{ width: "300px", height: "2rem" }}
          type="text"
        ></input>
        <input
          style={{
            color: "white",
            background: "black",
            padding: "0.5rem",
            marginLeft: "0.5rem",
          }}
          type="submit"
          value="SEND"
        />
      </form>
    </div>
  );
};

export default InputField;
