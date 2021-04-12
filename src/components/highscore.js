import React from "react";
const Highscore = () => {
  const lastScore = localStorage.getItem("score");
  const highScore = localStorage.getItem("high-score");

  return (
    <div
      style={{
        height: "100px",
        width: "400px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "silver",
          height: "100px",
          width: "200px",
          textAlign: "center",
        }}
      >
        <h6>Activ Score</h6>
        {lastScore}
      </div>
      <div
        style={{
          background: "gold",
          height: "100px",
          width: "200px",
          textAlign: "center",
        }}
      >
        <h6>High Score</h6>
        {highScore}
      </div>
    </div>
  );
};

export default Highscore;
