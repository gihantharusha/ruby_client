import React, { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const [input, setInput] = useState("no");

  const clickBtn = () => {
    if (input === "no") {
      SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
      setInput("yes");
    } else {
      SpeechRecognition.stopListening();
      setInput("no");
    }
  };

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  setInput(useSpeechRecognition());

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="container">
      <section className="top">
        <h1>Ruby</h1>
      </section>
      <button onClick={clickBtn}>Click</button>
      <div>{transcript}</div>

      <section className="result">
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, consequatur!
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, consequatur!
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, consequatur!
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, consequatur!
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;
