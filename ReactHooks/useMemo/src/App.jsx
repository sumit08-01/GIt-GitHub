import { useMemo } from 'react';
import { useState } from 'react'


function App() {
  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(1)

  const incrementNum1 = () => setNum1(num1 + 1);
  const incrementNum2 = () => setNum2(num1 + 1);

  const double = () => {
    console.log("Double Called");
    return num1 * 2;
  }

  // const triple = () => { //only use useMemo when if computation take long time 
  //   for (let i = 0; i <= 190000; i++);
  //   console.log("Triple Called");
  //   return num2 * 3;
  // }

  const tripleValue = useMemo(() => { // useMemo will cache/store the return value of the funtion
    for (let i = 0; i <= 170000000; i++);
    console.log("TripleValue Called");
    return num2 * 3;
  }, [num2] // when num2 change then only re-render the component
  )



  return (
    <>
      <h3>UseMemo -- hooks</h3>
      <span>NUM 1 : {num1}, Double of NUM 1 : {double()}</span> <br />
      <button onClick={incrementNum1}>Double of the Number</button> <br /><br />
      {/* <span>NUM 2 : {num2}, Triple of NUM 2 : {triple()}</span><br /> here we are calling the value the function */}
      <span>NUM 2 : {num2}, Triple of NUM 2 : {tripleValue}</span><br /> {/*here we are calling the value of the return function*/}
      <button onClick={incrementNum2}>Triple of the Number</button>
    </>
  )
}

export default App
