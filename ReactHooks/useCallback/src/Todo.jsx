import { memo } from "react";

const Todo = ({ todos, addTodo }) => {
    console.log("Todo"); // THis call every render because state of the componet change then component re-render again again even if Todo function even not called 
    return ( // TO over COme this proble we use useCallback hook
        <>
            <h1>My Todo List -- useCallback</h1>
            {
                todos.map((todo, index) => {
                    return <p key={index}>{todo + index}</p>
                })
            }
            <button onClick={addTodo}>Add Todo</button>
        </>


    )
}
export default memo(Todo);