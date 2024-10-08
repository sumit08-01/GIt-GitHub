import React from 'react'
import { useRef } from 'react'
import useItems from './useItems';

const initialEmployees = [
    "SACHIN",
    "RAHUL",
    "SOURABH",
];

export const EmployeeList = (props) => {
    const [items, addItem] = useItems(initialEmployees, true)
    const nameRef = useRef(null)

    const itemList = items.map((item, index) => (
        <li key={index}>
            {item}
        </li>
    ))
    return (
        <>
            <h2>{props.heading}</h2>
            <label>Enter Employee Name : <input type='text' ref={nameRef} /></label><br />
            <button onClick={() => addItem(nameRef.current.value)}>Add Employee</button>
            <ul>
                {itemList}
            </ul>
        </>
    )
}
