import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMsg, setGreetingMsg] = useState("Greeting Message")
  const thaiGreetingMsg = () => {
    setGreetingMsg("สวัสดี!")
  }
  const englishGreetingMsg = () => {
    setGreetingMsg("Hi!")
  }
  const chineseGreetingMsg = () => {
    setGreetingMsg("你好!")
  }

  return (
    <div className="App">
      <div className="greeting-container">{greetingMsg}</div>
      <div className="buttons">
        <button onClick = {thaiGreetingMsg}>สวัสดี!</button>
        <button onClick={englishGreetingMsg}>Hi!</button>
        <button onClick={chineseGreetingMsg}>你好!</button>
      </div>
    </div>
  );
}

export default App;
