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
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {msgArr
        .slice(0)
        .reverse()
        .map((content) => (
          <Message key={content.key} bot={content.bot}>
            {content.msg}
          </Message>
        ))}
    </div>
  );
};

export default Window;
