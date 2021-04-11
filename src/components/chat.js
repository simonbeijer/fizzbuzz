import React, { useEffect, useState } from "react";
import InputField from "./inputField";
import Window from "./window";

const Chat = () => {
  const [msgArr, setMsgArr] = useState([]);
  const [start, setStart] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(msgArr);
    console.log(start);
    console.log(counter);
  }, [msgArr, start, counter]);

  const logic = (input) => {
    if (input === "1") {
      setMsgArr([
        ...msgArr,
        { key: msgArr.length, msg: input, bot: false },
        { key: msgArr.length + 1, msg: "okej", bot: true },
      ]);
    } else {
      setMsgArr([
        ...msgArr,
        { key: msgArr.length, msg: input, bot: false },
        { key: msgArr.length + 1, msg: "?", bot: true },
      ]);
    }
  };

  const count = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const getInput = (input) => {
    count();
    if (start) {
      logic(input);
    } else if (input === "start") {
      setStart(true);
    } else {
      setMsgArr([
        { key: msgArr.length, msg: "Write start to start game", bot: true },
      ]);
    }
  };

  return (
    <div style={{ height: "600px", width: "400px" }}>
      <Window msgArr={msgArr} />
      <InputField getInput={getInput} />
    </div>
  );
};

export default Chat;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }
