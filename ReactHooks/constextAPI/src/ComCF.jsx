import React from 'react'
import { FirstName, LastName } from './App1'

export const ComCF = () => {
    return (
        <FirstName.Consumer>
            {(fName) => {
                return (
                    <LastName.Consumer>
                        {(lName) => {
                            return <h1>My name is {fName} {lName} it is a function based component</h1>
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
    )
}
