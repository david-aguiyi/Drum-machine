import "./App.css";
import React from "react";

const sounds = [
  {
    key: "Q",
    song: "Heater-1",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    song: "Heater-2",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    song: "Heater-3",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    song: "Heater-4",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    song: "Heater-6",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    song: "Dsc_Oh",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    song: "Kick_n_Hat",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    song: "RP4_KICK_1",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    song: "Cev_H2",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const App = () => (
  <div id="display" className="container display ">
    <h1>Play a sound</h1>
    {sounds.map((sound, idx) => (
      <DrumPad
        text={sound.key}
        key={idx}
        audio={sound.mp3}
        songId={sound.song}
      />
    ))}
  </div>
);

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.audioId();
    this.song();
  }
  playSound = () => {
    console.log("success");
    this.audio.current.play();
    const id = this.audio.current.id;
    const parent = this.audio.current.parentNode;
    parent.classList.add("active");
    const display = parent.parentNode;
    display.querySelector("h1").innerText = id;
  };
  song() {
    this.songId = React.createRef();
  }

  audioId() {
    this.audio = React.createRef();
  }

  render() {
    const { text, audio, songId } = this.props;
    return (
      <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
        {text}
        <audio src={audio} ref={this.audio} className="clip" id={songId} />
      </div>
    );
  }
}
document.addEventListener("keydown", (e) => {
  const id = keyFunction(e);
  console.log("success");
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add("active");
    console.log("success");
    audio.play();

    audio.addEventListener("ended", () => {
      parent.classList.remove("active");
    });
  }
});
export default App;
function keyFunction(e) {
  return e.key.toUpperCase();
}
