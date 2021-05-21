import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef(); // inputRef.current

  function focus() {
    // console.log(inputRef.current)
    inputRef.current.focus();
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />

      <div>Halo, nama saya {name}</div>

      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
