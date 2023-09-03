import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [formValue, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e)
    setFormErrors(validateForm(formValue));
    setIsSubmit(true)
  }
  useEffect(()=>{

  },[formErrors])
  const validateForm = (formValue) => {
    let errors={};
    console.log(formValue);
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if(!formValue.username ){
        errors.username="Username is required";
    }
    else if(!formValue.password ){
        errors.password="password is required";
    }
    else if(!formValue.email){
        errors.email="Email is required";
    }
    console.log(errors);
    return errors;
  };
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>userName:</label>
        <input
          values={formValue.username}
          onChange={(e) =>
            setFormValues({ ...formValue, username: e.target.value })
          }
        ></input>
        <label>Password:</label>
        <input
          values={formValue.password}
          onChange={(e) =>
            setFormValues({ ...formValue, password: e.target.value })
          }
        ></input>
        <label>email:</label>
        <input
          values={formValue.email}
          onChange={(e) =>
            setFormValues({ ...formValue, email: e.target.value })
          }
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
