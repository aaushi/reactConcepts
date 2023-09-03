import React, { useState } from "react";

const DropDowns = () => {
  let citiesToDisplay=[];
  const [selectedState,setSelectedState]=useState();
 
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

  const handleSelectedState=(e)=>{
      setSelectedState(e.target.value);
  }
  return (
    <>
      <h3>Question 1</h3>
      <div>
        <select onChange={(e) => handleSelectedState(e)}>
          {list.map((res, index) => {
            return (
              <>
                <option key={index} value={res.state}>
                  {res.state}
                </option>
              </>
            );
          })}
        </select>
        <select>
        
          {list
            .find((c) => c?.state === selectedState)
            ?.cities.map((city, index) => {
              return (
                <option key={index}  value={city}>
                  {city}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
};

export default DropDowns;
