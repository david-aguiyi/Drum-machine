import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
  };
  render() {
    console.log("htell");
    const { keys } = this.state;
    return (
      <div id="drum-machine">
        <div id="display" className="display">
          {keys.map((key, idx) => (
            <Box text={key} key={idx} />
          ))}
        </div>
      </div>
    );
  }
}

const Box = (props) => <div className="box">{props.text}</div>;

export default App;
