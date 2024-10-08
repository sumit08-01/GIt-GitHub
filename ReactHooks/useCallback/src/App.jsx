import { useState } from 'react'
import { useCallback } from 'react'
import ButtonComponent from './ButtonComponent';


function App() {
  const [score, setScore] = useState(50)
  const [marks, setMarks] = useState(50)

  const incrementScore = useCallback(() => {
    setScore(score + 1)
  }, [score]);
  const incrementMarks = useCallback(() => {
    setMarks(marks + 1)
  }, [marks]);

  // const incrementScore = () => setScore(score + 1); // In this seen when we change on one - useState then the entire code is render
  // ex --> when change in score then marks is also render again even it's not change and vice-versa
  // const incrementMarks = () => setMarks(marks + 1); // TO solve this --> we use useCallback hooks.

  return (
    <>
      <h3>useCallback hooks --</h3>
      <span>{score}</span>
      <ButtonComponent handleClick={incrementScore}>Increment Score</ButtonComponent><br />
      <span>{marks}</span>
      <ButtonComponent handleClick={incrementMarks}>Increment Marks</ButtonComponent>

    </>
  )
}

export default App
