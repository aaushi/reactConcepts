import React, { useState } from "react";

const LoginForm = () => {
  const [formValue, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [erroMessage,setErrorMessage]=useState("");
  const handleSubmit=()=>{
    if(!formValue.username ){

    }
    else if(!formValue.password ){

    }
    else if(!formValue.email){
        
    }

  }
  return (
    <div>
      <form onSubmit={()=>handleSubmit()}>
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
