import React, { useEffect, useState } from "react";
import InputField from "./inputField";
import Window from "./window";
import Highscore from "./highscore";

const Chat = () => {
  const [msgArr, setMsgArr] = useState([]);
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(0);
  const [answerArr, setAnswerArr] = useState([]);

  // Check the answer from array
  const logic = (input) => {
    if (input == answerArr[counter]) {
      setMsgArr([
        ...msgArr,
        { key: msgArr.length, msg: input, bot: false },
        { key: msgArr.length + 1, msg: answerArr[counter + 1], bot: true },
      ]);
      gameScore();
      setCounter(counter + 2);
    } else {
      if (msgArr[msgArr.length - 1].gameOver) {
        return;
      }
      setMsgArr([
        ...msgArr,
        { key: msgArr.length, msg: input, bot: false },
        {
          key: msgArr.length + 1,
          msg: "Game over! Score: " + (score - 1),
          bot: true,
          gameOver: true,
        },
      ]);
    }
  };

  // Keep score in game
  const gameScore = () => {
    setScore(score + 1);

    localStorage.setItem("score", score);

    if (score > localStorage.getItem("high-score")) {
      localStorage.setItem("high-score", score);
    }
  };

  // Get input and start game
  const getInput = (input) => {
    if (start) {
      logic(input);
    } else if (input === "start") {
      if (!start) {
        if (Math.floor(Math.random() * 2)) {
          setMsgArr([
            ...msgArr,
            { key: 0, msg: input, bot: false },
            { key: 0 + 1, msg: "You start", bot: true },
          ]);
          gameScore();
        } else {
          setMsgArr([
            ...msgArr,
            { key: 0, msg: input, bot: false },
            { key: 0 + 1, msg: "I Start", bot: true },
            { key: 0 + 2, msg: "1", bot: true },
          ]);
          setCounter(counter + 1);
          gameScore();
        }
        setAnswerArr(createAnswerArray);
        setStart(true);
      }
    } else {
      setMsgArr([
        { key: msgArr.length, msg: "Write start to start game", bot: true },
      ]);
    }
  };

  // Answer array
  const createAnswerArray = () => {
    const arr = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("fizzbuzz");
      } else if (i % 3 === 0) {
        arr.push("fizz");
      } else if (i % 5 === 0) {
        arr.push("buzz");
      } else {
        arr.push(i);
      }
    }
    return arr;
  };

  return (
    <div style={{ height: "600px", width: "400px" }}>
      <Highscore />
      <Window msgArr={msgArr} />
      <InputField getInput={getInput} />
    </div>
  );
};

export default Chat;
