import React from 'react';
import {useState} from 'react';

const car = () => {
    const[brand, setBrand]=useState(0);
    const[model, setModel]=useState(0);
    const[colour, setColour]=useState(0);
    const[year, setYear]=useState(0);

    return (
        <>
            <form>
            <label>Brand:</label>
            <input name="brand" type="text" value={brand} onChange={e=>setBrand(e.target.value)}/>
            <label>Model:</label>
            <input name="model" type="text" value={model} onChange={e=>setModel(e.target.value)}/>
            <label>Colour:</label>
            <input name="colour" type="text" value={colour} onChange={e=>setColour(e.target.value)}/>
            <label>Year:</label>
            <input name="year" type="text" value={year} onChange={e=>setYear(e.target.value)}/>
            <button>Submit</button>
            <br/>
            </form>
            <label>Brand: {brand}</label>
            <br/>
            <label>Model: {model}</label>
            <br/>
            <label>Year: {year}</label>
            <br/>
            <label>Colour: {colour}</label>
        </>
    )
}
export default car;