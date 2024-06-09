import { useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef();
  const handleRef = () => {
    console.log(ref);
  };
  return (
    <>
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>
    </>
  );
}

export default App;
