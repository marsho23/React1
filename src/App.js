// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Cat from './components/Cat';
// import ComponentWithProps from './components/ComponentsWithProps';
import Trainer from './components/Trainer';
// import PropComp from './components/propsFile';
// import Counter from './components/Counter';
// import Converter from './components/Converter';
// import MilesAhead from './components/MilesAhead';
// import Login from './components/Login';
// import Car from './components/car';
// import ProductTable from './components/ProductTable';
import Calculator from './components/calculator';
// import trainers from "./components/trainers.json"

//javascript function returning html
function App() {
  // const name ={
  //   forename:"maryum",
  //   surname: "shouket"
  // }
  
  //you can only return one parent element so to return multiple things
  //use somethign like div and put it all in there
  return (
    <>
         {/* <Cat/>
         <h3>JSX exercise</h3>
         <p>{name.forename}</p>
         <p>{name.surname}</p>
         <h3>Components tutorial</h3>
         <h3>props example</h3>
         <Trainer name = "JH" age = {29}/>
         <Trainer name = "Andy" age = {20}/>
         <h3>props tutorial</h3>
         <PropComp/> 
         <ComponentWithProps/>
         <Counter/>
         <Converter/>
         <MilesAhead/>
         <Login/>
         <Car/>
         <br/>
         <ProductTable/> */}
         <Calculator/>
         <br/>
         {/* {
         trainers.map(({id,name,age})=><Trainer key = {id} name={name} age={age}/>
         )
        } */}
    </>
  );
}
export default App;
