import React from 'react';
import {useState} from 'react';
const Login=()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    // const setValues = e => {
    //     e.preventDefault();
    //     setUsername( e.target.value);
    //     setPassword  (e.target.value);
    // }
    return (
        <>
            {/* <form onSubmit={setValues}> */}
            <form>
            <label>Username:</label>
            <input name="username" type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
            <label>Password:</label>
            <input name="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button>Submit</button>
            <br/>
            </form>
            <label>Username: {username}</label>
            <br/>
            <label>Password: {password}</label>
        </>
    )
}
export default Login;