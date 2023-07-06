import React from 'react'

const Count = ({ count,text }) => {
  console.log("=====");
  console.log(text);
  console.log(count);
  console.log("=====");
  return (
    <div>
      {text}:{count}
    </div>
  );
};

export default Count