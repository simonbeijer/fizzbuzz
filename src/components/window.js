import React from "react";
import Message from "./message";
const Window = ({ msgArr }) => {
  return (
    <div
      style={{
        background: "white",
        height: "500px",
        width: "400px",
        overflow: "scroll",
        flexGrow: " 1",
      }}
    >
      {msgArr.map((content) => (
        <Message bot={content.bot}>{content.msg}</Message>
      ))}
    </div>
  );
};

export default Window;
