import { Component } from "react";

import { FirstName, LastName } from './App' // 4 : step --> import the context you have use

class ComC extends Component {
    render() {
        return (
            <>
                <FirstName.Consumer>
                    {/* 5 step --> Consume the context Like this*/}
                    {(fName) => {
                        // 6 : step --> To consume the context we have to return JS in a function like this
                        return (
                            <LastName.Consumer>
                                {/* And you can use like this if more than one context you have to use */}
                                {(lName) => {
                                    return <h1>My Name is {fName.Fname} {lName.Lname} it is a classed based component</h1> // use like this in curly braces
                                }}
                            </LastName.Consumer>
                        )
                    }}
                </FirstName.Consumer>
            </>
        );
    }
}
export default ComC;

