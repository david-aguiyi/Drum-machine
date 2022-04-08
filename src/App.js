import "./App.css";
import React from "react";

const sounds = [
  {
    key: "Q",
    song: "Heater-1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    song: "Heater-2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    song: "Heater-3",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    song: "Heater-4",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    song: "Heater-6",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    song: "Dsc_Oh",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    song: "Kick_n_Hat",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    song: "RP4_KICK_1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    song: "Cev_H2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];
const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const sound = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",

  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",

  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
];
const App = (props) => (
  <div id="display" className="container display ">
    {keys.map((key, idx) => (
      <Box text={key} key={idx} />
    ))}
  </div>
);

class Box extends React.Component {
  render() {
    return (
      <div className="box">
        {this.props.text}
        <audio />
      </div>
    );
  }
}

export default App;
