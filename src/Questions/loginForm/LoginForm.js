import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [formValue, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setFormErrors(validateForm(formValue));
    console.log(formErrors);
    setIsSubmit(true);
  };



  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);



  const validateForm = (formValue) => {
    let errors = {};
    console.log(formValue);

    const regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const regexUsername = new RegExp("^[a-zA-Z]*$");
    if (!formValue.username) {
      errors.username = "Username is required";
    }
    if (!regexUsername.test(formValue.username)) {
      errors.username = "Username is not Valid";
    }
    if (!formValue.password) {
      errors.password = "password is required";
    } else if (formValue.password.length < 4) {
      errors.password = "password is not valid";
    }
    if (!formValue.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(formValue.email)) {
      errors.email = "Email is not Valid";
    }
    return errors;
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>userName:</label>
        <input
          values={formValue.username}
          onChange={(e) =>
            setFormValues({ ...formValue, username: e.target.value })
          }
        ></input>
        <p style={{ color: "red" }}>{formErrors.username}</p>
        <label>Password:</label>
        <input
          type="password"
          values={formValue.password}
          onChange={(e) =>
            setFormValues({ ...formValue, password: e.target.value })
          }
        ></input>
        <p style={{ color: "red" }}>{formErrors.password}</p>
        <label>email:</label>
        <input
          values={formValue.email}
          onChange={(e) =>
            setFormValues({ ...formValue, email: e.target.value })
          }
        ></input>
        <p style={{ color: "red" }}>{formErrors.email}</p>
        <button > Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
