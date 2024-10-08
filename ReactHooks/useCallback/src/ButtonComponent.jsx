import React from 'react'

const ButtonComponent = (props) => {
    console.log("Handle button : " + props.children);
    return (
        <button onClick={props.handleClick}>{props.children}</button>
    )
}
export default React.memo(ButtonComponent) // Pure Component