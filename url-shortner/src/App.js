import "./App.css";
import InputShortner from "./InputShortner";
import BackgroundAnimation from "./BackgroundAnimation";
import LinkResult from "./LinkResult";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputShortner setInputValue={setInputValue} />
      <BackgroundAnimation />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
