import React, { createContext } from 'react'
import { ComAF } from './ComAF'

const FirstName = createContext();
const LastName = createContext();

export const App1 = () => {
    return (
        <FirstName.Provider value={"sumit"}>
            <LastName.Provider value={"Gond"}>
                <ComAF />
            </LastName.Provider>
        </FirstName.Provider>
    )
}

export { FirstName, LastName };