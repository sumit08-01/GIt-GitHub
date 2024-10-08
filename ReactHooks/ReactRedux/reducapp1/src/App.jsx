import { useDispatch, useSelector } from 'react-redux/'

import { incNumber, decNumber, mulNumber, divNumber } from './actions' // calling from action

function App() {

  const myState = useSelector((state) => state.changeTheNumber)
  const multDiv = useSelector((state) => state.mulDivTheNumber)
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div >
          <button onClick={() => dispatch(decNumber(3))} > <span>-</span></button>
          <input type='text' value={myState} />
          <button onClick={() => dispatch(incNumber(5))}><span>+</span></button>
        </div>
      </div >

      <hr />

      <div>
        <h1>Multiplication/Division Counter</h1>
        <h4>Using React and Redux</h4>
        <div >
          <button onClick={() => dispatch(divNumber(5))} > <span>/</span></button>
          <input type='text' value={multDiv} />
          <button onClick={() => dispatch(mulNumber(5))}><span>*</span></button>
        </div>
      </div >
    </>
  )
}

export default App
