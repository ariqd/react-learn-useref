import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  // const inputRef = useRef(); // inputRef.current
  const prevName = useRef("");

  // function focus() {
  //   // console.log(inputRef.current)
  //   inputRef.current.focus();
  // }

  // useEffect(() => {
  //   prevName.current = name
  // }, [name])

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      prevName.current = name;
      console.log('Name saved!')
    }
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        // ref={inputRef}
        onKeyDown={handleKeyDown}
      />

      <div>
        Halo, nama saya {name}, tadinya sih {prevName.current}
      </div>

      {/* <button onClick={focus}>Focus</button> */}
    </>
  );
}

export default App;
