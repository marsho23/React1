import React from 'react';
import {useState} from 'react';

const Calculator = () =>{
    const[result,setResult]=useState(0);
    return(
        <>
            <br/>
            <input value = {result}/>
            <br/>
            <button onClick={()=>setResult(result-5)}>-5</button>
            <button onClick={()=>setResult(result-1)}>-1</button>
            <button onClick={()=>setResult(0)}>Reset</button>
            <button onClick={()=>setResult(result+1)}>+1</button>
            <button onClick={()=>setResult(result+5)}>+5</button>
        </>
    );
}

export default Calculator;