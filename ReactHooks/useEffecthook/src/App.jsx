import { useEffect } from 'react';
import { useState } from 'react'

import React from 'react'

export const CounterOneComponent = () => {

  const [count, setCount] = useState(0);
  console.log("constructor");

  //useEffect With using Second Arrgument -->  THis is use for fetching that from backend server and it take time so we don't run this again and again
  useEffect(() => { // Async -> combination of CompodidMount and CompoDidUpdate
    console.log("Equivalent to CompodidMount and CompoDidUpdate");
    console.log("Counter 1 = " + count);
  })
  return (
    <>
      {console.log("inside Render")}
      <h1>useEffect Demo using react Hooks</h1>
      <h2>useEffect execute every Rander</h2>
      <span>Count : {count} </span> <button onClick={() => setCount(prevCount => prevCount + 1)}>Count ++ </button>
      <hr />
    </>
  )
}
export const CounterTwoComponent = () => {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  //useEffect - specifying dependent value as secound argument
  //Removing Secound argument will lead to unceccessary printing of console log even 
  // when checkbox is toggled (which is unrelated to counter)

  useEffect(() => {
    console.log("Counter 2 = " + count);
  }, [count]) //[] --> Not calling useeffect , [count] --> call only count, [count,checked] --> all both
  // we can call both sepaqrately
  // useEffect(() => {
  //   console.log("checked  = " + checked);
  // }, [checked])
  return (
    <>
      <h1>useEffect Demo using react Hooks</h1>
      <h2>useEffect execute every Rander</h2>
      <span>Count : {count} </span> <button onClick={() => setCount(prevCount => prevCount + 1)}>Count ++ </button>
      <div>
        <input type='checkbox' onChange={() => setChecked(prevChecked => !prevChecked)} defaultValue={checked} />
        <span>{checked ? "Checked" : "Unchecked"}</span>
      </div>
    </>
  )
}

export const CounterThreeComponent = () => {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  // useEffect - specifying dependent value as empty array - equivalent to componentDidMount
  // setInterval is expected to ne called only once.
  //Removing the empty array second argument will lead to setInterval being called for each render
  //Which leads to undesirable effect

  useEffect(() => { // ComponentDidMount
    console.log("Counter Three Component mounting, Setting Interval");
    setInterval(() => setCount(prevCount => prevCount + 1), 2000);
  }, [])

  useEffect(() => {
    console.log("Checked = " + checked);
  }, [checked])
  return (
    <>
      <h2>useEffect execute only for initial Render</h2>
      <p>Count : {count} </p>
      <div>
        <input type='checkbox' onChange={() => setChecked(prevChecked => !prevChecked)} defaultValue={checked} />
        <span>{checked ? "Checked" : "Unchecked"} state</span>
      </div>
    </>
  )
}
const CounterFourComponent = () => {
  const [count, setCount] = useState(0);

  //UseEffect - Equivalent of ComponentDidUnMount can be achieved by returning a cleanup function
  //
  // If return of cleanup function is removed, then the interval will not be cleared
  // Then when CounterFourComponent is removed by CLicking on "Hide Counter",
  // a warning will be logged is console as state update is being attempted on an unmounted component

  useEffect(() => {
    console.log("Counter Four Component mounting, Setting Interval");
    const intervel = setInterval(() => setCount(prevCount => prevCount + 1), 2000);
    return () => { // THis function is called as CleanUp function or UnMounting
      console.log("Counter Four Component Unmounting, Clearing Interval");
      clearInterval(intervel); // When this function is call first time react keepIt with self, when this component is unmounting then react give this.
    }
  }, [])
  return (
    <>
      <p>Count : {count}</p>
    </>
  )
}
const CounterFourContainer = () => {

  const [show, setShow] = useState(true);

  return (
    <>
      <h3>UseEffect - CleanUp</h3>
      <button onClick={() => setShow(prevShow => !prevShow)}>{show ? "Hide" : "Show"}Counter</button>
      {show && <CounterFourComponent />}
    </>
  )
}

function App() {

  return (
    <>
      {/* <CounterOneComponent /> */}
      {/* <CounterTwoComponent /> */}
      {/* <CounterThreeComponent /> */}
      <CounterFourContainer />


    </>
  )
}

export default App
