import React from "react";

const Message = ({ children, bot }) => {
  return (
    <>
      {bot ? (
        <div
          style={{
            marginLeft: "1rem",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "grey", paddingBottom: "0.5rem" }}>Bot</p>
          <div
            style={{
              width: "40%",
              background: "darkgrey",
              borderRadius: "50px",
            }}
          >
            <p style={{ padding: "1rem" }}>{children}</p>
          </div>
        </div>
      ) : (
        <div
          style={{
            marginRight: "1rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                color: "lightgrey",
                paddingBottom: "0.5rem",
              }}
            >
              You
            </p>
            <div
              style={{
                background: "darkgrey",
                borderRadius: "50px",
              }}
            >
              <p style={{ padding: "1rem" }}>{children}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
