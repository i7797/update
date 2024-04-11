import React, { useState, useEffect } from 'react';


const Input = ({CreateInputButton}) => {
const [InputValue,setInputValue]=useState('')

function handelSubmit(e)
{

e.preventDefault();
if(InputValue ==""){
alert("Hello");
}
else {
    CreateInputButton(InputValue);
    setInputValue("");
   
}

}
    return (  
        <form onSubmit={handelSubmit}>
            <input
            type="text"
            placeholder="enter your "
            value={InputValue}
            onChange={(e)=>setInputValue(e.target.value)}/>

            <button onClick={handelSubmit}>Click </button>
        </form>
    );
}
 
export default Input;