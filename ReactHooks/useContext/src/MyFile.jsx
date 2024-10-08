import React from 'react'
import { useContext } from 'react'
import { UseName } from './App';


export const MyFile = () => {

    const myName = useContext(UseName); // third step

    return (
        <div>MyFile with my name is {myName}</div> // fourth step 
    )
}