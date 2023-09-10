import React, { useState } from 'react'
import "./LoginForm.css";

const FormControlInput = (inputItems) => {
   // console.log(inputItems)
   const [touched, setTouched] = useState(false);
   const handleTouched = () => {
     setTouched(true);
   };
  return (
    <div className="formInput">
      <label>{inputItems.label}</label>
      <input
        type={inputItems.type}
        placeholder={inputItems.placeholder}
        name={inputItems.name}
        onChange={inputItems.onChange}
        required={inputItems.required}
        pattern={inputItems.pattern}
        onBlur={() => handleTouched()}
        touched={touched.toString()}
      ></input>
      <span>{inputItems.errorMessage}</span>
    </div>
  );
}

export default FormControlInput