import React, { useState } from "react";
import FormControlInput from "./FormControlInput";
import "./LoginForm.css"

const LoginFormVariation2 = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    
  });

  const inputs = [
    {
      id: "1",
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
      errorMessage:
        "User name should be between 3-16 character and should not include any special character or numbers",
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: "2",
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMessage: "Enter Valid email Address",
      pattern: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
    },
    {
      id: "3",
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: false,
    },
    {
      id: "4",
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "Password",
      required: true,
      errorMessage:
        "Password should be 8-20 characters and include at 1 letter,1 character and 1 special chacarter",
      pattern: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$",
    },
    {
      id: "5",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      errorMessage: "Password should Match",
      pattern: formValues.password
    },
  ];
  const handleChange=(e)=>{
    setFormValues({ ...formValues,[e.target.name]:e.target.value});
    
  }
  console.log(formValues);
  const handleSubmit=()=>{

  }
  return (
    <div className="formApp">
      <form onSubmit={()=>handleSubmit()}>
        <h1>Register</h1>
        {inputs.map((item) => {
          return (
            <FormControlInput className="formInput"
              key={item.id}
              {...item}
              value={formValues[inputs.name]}
              onChange={(e) => handleChange(e)}
            ></FormControlInput>
          );
        })}
        <button> Submit</button>
      </form>
    </div>
  );
};

export default LoginFormVariation2;
