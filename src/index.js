import React from "react";
import ReactDOM from "react-dom";
import "./Index.css";

const rootElement = document.getElementById("root");

const Room = () => {
  const [isLit, setLit] = React.useState(false);
  const [temperature, control] = React.useState(22);

  const brightness = isLit ? "lit" : "dark";

  return (
    <div className={`room ${brightness}`}>
      The room is {isLit ? "lit" : "dark"}
      <br />
      Room temperature is {temperature} degrees celcious
      <br />
      <button onClick={() => setLit(!isLit)}>Flip</button>
      <button onClick={() => setLit(1)}>ON</button>
      <button onClick={() => setLit(0)}>OFF</button>
      <br />
    </div>
  );
};

ReactDOM.render(<Room />, rootElement);
