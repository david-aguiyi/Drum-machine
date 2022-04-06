import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
  };
  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          {keys.map((key, idx) => (
            <Box text={key} key={idx} />
          ))}
        </div>
      </div>
    );
  }
}
const app = () => <div>Hello</div>;

const Box = () => <div className="box">{props.text}</div>;
export default App;
