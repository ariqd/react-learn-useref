import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>Halo, nama saya {name}</div>
    </>
  );
}

export default App;
