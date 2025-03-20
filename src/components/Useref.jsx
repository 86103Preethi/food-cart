import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function Video() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0); //store mutable value without re-render, and used to store previous state value.

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default Video;

































































