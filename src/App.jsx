import { useState } from "react";
import { InputGetClima } from "./components/InputGetClima";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InputGetClima></InputGetClima>
    </>
  );
}

export default App;
