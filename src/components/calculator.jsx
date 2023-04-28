import React from 'react';
import { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);
    const onResultChange = (e) => {
        const CHANGE = Number.parseInt(e.target.innerText);
        console.log(result, "+", CHANGE, "=", result + CHANGE);
        setResult((result) => result + CHANGE);
        setHistory([`${result} + ${CHANGE} = ${result + CHANGE}`, ...history]);
    }
    console.log(history);
    return (
        <>
            <br />
            <input value={result} readOnly />
            <br />
            <button onClick={onResultChange}>-5</button>
            <button onClick={onResultChange}>-1</button>
            <button onClick={onResultChange}>Reset</button>
            <button onClick={onResultChange}>+1</button>
            <button onClick={onResultChange}>+5</button>
            <label>History:</label>
            <div>
                {history.map((h, i) => (
                    <p key={i}>{h}</p>))
                }
            </div>
        </>
    );
}

export default Calculator;