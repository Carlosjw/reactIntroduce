import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const element = "Eita cabrinha atoa!";
const element2 = <h1>Encheção de linguiça!</h1>;

function App() {
  return (
    <div className="testDiv">
      {element}
      {element2}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
