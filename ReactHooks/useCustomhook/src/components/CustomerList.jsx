import React from 'react'
import { useRef } from 'react'
import useItems from './useItems'


export const CustomerList = (props) => {
    const [items, addItem] = useItems(["citibank", "pnb"], false)
    const nameRef = useRef(null)

    const itemList = items.map((item, index) => (
        <li key={index}>
            {item}
        </li>
    ))
    return (
        <>
            <h2>{props.heading}</h2>
            <label>Enter Customer Name : <input type='text' ref={nameRef} /></label><br />
            <button onClick={() => addItem(nameRef.current.value)}>Add Employee</button>
            <ul>
                {itemList}
            </ul>
        </>
    )
}
