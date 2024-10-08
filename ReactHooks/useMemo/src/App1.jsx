import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

export const App1 = () => {

    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)

    const getValue = () => {
        setCount(count + 1);
        console.log(count);
    }

    const Increment = (num) => {
        console.log("Increment Called " + num);
        for (let index = 0; index < 10000000000; index++) { }
        return num;
    }

    const checkValue = useMemo(() => { // This function is return a Memoized Value or useCallback retrun a memoized function
        return Increment(count)
    }, [count]) // THis function is only run when count value change, if this change then this function is run, and return a value



    return (
        <>
            <button onClick={getValue}>Counter</button>
            <p>My Number is : {checkValue}</p>
            <button onClick={() => setShow(!show)}>{show ? 'You Clicked me' : 'Please Clicke me'}</button>
        </>
    )
}
