import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 1000,
      cup: "água",
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        cup: "suco",
      });
    }, 3000);
  }

  alterarCopo = () => {
    this.setState({
      // manipula o .state
      cup: "refrigerante",
    });

    // this.state.cup = "refrigerante";
  };

  render() {
    const { clock, cup } = this.state;
    return (
      <div>
        <h1>{clock}</h1>
        <button id="buttonCup" onClick={() => this.alterarCopo()}>
          <h1>{cup}</h1>
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
