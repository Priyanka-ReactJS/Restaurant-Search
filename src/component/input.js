import React from "react";
import './input.css'

const Input = ({text,autoFocus,onChange,value,type,placeholder,arialabel}) =>{
    return(
        <>
        <input 
        placeholder={placeholder}
        arialabel={arialabel}
        autoFocus={autoFocus}
        onChange={onChange}
        type={type}
        value={value || ''}
        className="form-control inputClass"
        />
        </>
    )
}
export default Input; 