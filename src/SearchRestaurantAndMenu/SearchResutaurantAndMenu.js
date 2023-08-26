import React, { useState } from "react";
import { filterData } from "./Helper";


const SearchResutaurantAndMenu = () => {
  const [search, setSearch] = useState("");
  const [searchResults,setSearchResults]=useState('');
  const restuarant = [
    { restuarantName: "meghna biryani", items: [""] },
    { restuarantName: "empire restuarant", items: ["biryani", "curd rice"] },
    { restuarantName: "kfc", items: ["burger"] },
  ];

  const handleSearch=(e)=>{
    setSearch(e.target.value);
    const data = filterData(e.target.value, restuarant);
    setSearchResults(data)
  }
  return (
    <>
      <div>
        <input value={search} onChange={(e) => handleSearch(e)} /> 
      </div>
      <div>
        {searchResults.length && (
          searchResults.map((res)=>{
            return <div>{res.restuarantName}</div>})
         
        )}
      </div>
    </>
  );
};

export default SearchResutaurantAndMenu;
