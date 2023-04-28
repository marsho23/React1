import React from 'react';
import {useState} from 'react';

const products = [
    {id:1, name:"apple",price:1.0},
    {id:1, name:"banana",price:1.2},
    {id:1, name:"strawberry",price:2.0},
    {id:1, name:"mango",price:2.5},
    {id:1, name:"pineapple",price:1.5}
];

const ProductTable = ()=> {
    const[searchString,setSearchString]=useState('');

    const onSearchStringChange = (event)=>{
        setSearchString(event.target.value);
    };

    const filteredProduct = products.filter((product)=>
        product.name.toLowerCase().includes(searchString.toLowerCase())
    );

    return (
        <>
            <input name="searchString" type="text" value={searchString} onChange={onSearchStringChange}/>
        </>
    )
}
export default ProductTable;
