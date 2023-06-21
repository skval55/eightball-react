import { useCallback, useState } from "react";
import "./eightBall.css";

const EightBall = ({ answers }) => {
  const [display, setDisplay] = useState({
    msg: "think of a question",
    color: "black",
  });

  const _handleClick = useCallback(() => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setDisplay(randomAnswer);
  }, [answers]);

  return (
    <div
      className={`eightball`}
      style={{ backgroundColor: display.color }}
      onClick={_handleClick}
    >
      <p className="eightball-text">{display.msg}</p>
    </div>
  );
};

export default EightBall;
