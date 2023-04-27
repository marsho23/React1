import React from 'react';
import {useState} from 'react';
const Counter = () => {
    //destructuring useState to get count and setCount. 
    // [] -> to destructure an array
    // {} -> to destructure an object
    const[count,setCount]=useState(0);
    return (
        <>
            <input value = {count}/>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </>
    );
}
export default Counter;