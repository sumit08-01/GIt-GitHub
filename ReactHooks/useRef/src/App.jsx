import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const refName = useRef(null); // DOM Reference
  const refInterval = useRef(null); // Mutable value reference

  const retrieveData = () => {
    let name = refName.current.value;
    console.log(name);
    refName.current.focus();

  }

  useEffect(() => {
    refInterval.current = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
  }, [])


  return (
    <>
      <h1>useRef Demo</h1>
      <div>
        <label>Enter Your Name :
          <input type="text" ref={refName} /><br /><br />
        </label>
      </div>
      <div></div>
      <button onClick={retrieveData}>Retrieve name and display</button><br />
      <span>Count : {count}</span><br />
      <button onClick={() => clearInterval(refInterval.current)}>Clear Timer</button>
    </>
  )
}

export default App
