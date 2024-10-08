import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../actions'

const Todo = () => {

    const [inputData, setInputData] = useState('')
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();


    return (
        <>
            <div>
                <figure>
                    <figcaption>Add Your List Here ✌️</figcaption>
                </figure>
                <div className='addItems'>
                    <input type='text' placeholder='✍️ Add Items...'
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                        onClick={() => dispatch(addTodo(inputData), setInputData(''))}
                    />
                    <button>+</button>
                </div>
                <div className='deleteItems'>
                    {
                        list.map((elem) => {
                            return (
                                <div key={elem.id}>
                                    <span>{elem}</span>
                                    <button onClick={() => dispatch(deleteTodo(elem.id))} >❌</button>
                                </div>
                            )
                        })
                    }
                </div>

            </div >
        </>
    )
}

export default Todo;