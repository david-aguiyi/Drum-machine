import "./App.css";
import React from "react";

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const App = (props) => (
  <div id="display" className=" m-auto display">
    {keys.map((key, idx) => (
      <Box text={key} key={idx} />
    ))}
  </div>
);

class Box extends React.Component {
  render() {
    return <div className="box">{props.text}</div>;
  }
}

export default App;
