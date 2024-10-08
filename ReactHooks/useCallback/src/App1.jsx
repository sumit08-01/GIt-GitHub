import React from 'react'
import { useCallback } from 'react';
import { useState, memo } from 'react'
import Todo from './Todo';

const App1 = () => {

    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])


    const increment = () => {
        setCount(count + 1)
    }

    const addTodo = useCallback(() => {
        setTodos((todo) => [...todo, 'New Todo'])
    }, [todos]) // when Todos value change then this function called
    // const addTodo = () => {
    //     setTodos((todo) => [...todo, 'New Todo'])
    // }
    return (
        <div>
            <Todo todos={todos} addTodo={addTodo} />
            <hr />
            <span>Count : {count}</span>
            <button onClick={() => increment()}>Count++</button>
        </div>
    )
}

export default App1;