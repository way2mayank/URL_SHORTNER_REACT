import { useState } from "react";

const InputShortner = ({setInputValue}) => {
  const [value, setValue] = useState("");

  const handleClick= ()=>{
    setInputValue(value)
    setValue('')
  }

  return (
    <div className="inputContainer">
      <h1>
        URL <span>SHORTNER</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste url to sorten"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>SORTEN</button>
      </div>
    </div>
  );
};

export default InputShortner;
