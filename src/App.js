import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(1);

  useEffect(() => {
    // setRenderCount((prevRenderCount) => prevRenderCount + 1);
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>Halo, nama saya {name}</div>

      <div>Komponen ini dirender {renderCount.current} kali</div>
    </>
  );
}

export default App;
