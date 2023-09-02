import React from "react";

const DropDowns = () => {
  const list = [
    {
      state: "Uttar Pradesh",
      cities: ["varanasi", "mirzapur", "kanpur"],
    },
    {
      state: "Jharkhand",
      cities: ["Ranchi", "Tatanagar", "Bokaro"],
    },
    {
      state: "karnataka",
      cities: ["Bangalore", "Mysore"],
    },
    {
      state: "Maharashtra",
      cities: ["Mumbai", "Pune"],
    },
    {
      state: "Bihar",
      cities: ["Patna"],
    },
  ];
    
  return (
    <>
    <h3>Question 1</h3>
      <div>
        {list.map((res) => {
          <select>{res.state}</select>;
        })}
      </div>
    </>
  );
};

export default DropDowns;
