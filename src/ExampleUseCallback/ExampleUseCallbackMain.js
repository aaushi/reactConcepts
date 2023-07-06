import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ExampleUseCallbackMain = () => {
  const [age, setAge] = useState(28);
  const [salary, setSalary] = useState(5000);

   const incrementAge = useCallback(() => {
     console.log(age);
     setSalary(age + 1);
   },[age]);
  const incrementSalary = useCallback(() => {
    console.log(salary);
    setSalary(salary + 1000);
  },[salary]);

 
  return (
    <div>
      <Title />
      <Count count={age} text="age" />
      <Button handleClick={() => incrementAge()}></Button>
      <Count count={salary} text="salary" />
      <Button handleClick={() => incrementSalary()}></Button>
    </div>
  );
};

export default ExampleUseCallbackMain;
