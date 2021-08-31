import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./styles.css";

function soma(a, b) {
  alert(a + b);
}

function App() {
  return (
    <div className="App">
      Hello World
      <Button onClick={() => soma(10, 20)} name="Carlos Lima" />
      {/* padrão CamelCase do React */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
