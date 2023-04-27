import React from 'react';
import {useState} from 'react';

const MilesAhead = () => {
    const[step, setSteps]=useState(0);
    const increment = () => {
        setSteps(step+1);
    }

    return (
        <>
            <p>Today you've taken {step} steps! </p>
            <br/>
            <button onClick={increment}>I took another step</button>
        </>
    )
}
export default MilesAhead;