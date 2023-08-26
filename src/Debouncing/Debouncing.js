import React, { useState, useEffect } from "react";
//import classnames from "classnames";
// you should import `lodash` as a whole module
//import lodash from "lodash";
//import axios from "axios";

const ITEMS_API_URL = "http://universities.hipolabs.com/search?country=";
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Debouncing() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let debounceTimer;
  useEffect(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (query) {
        getData();
      }
    }, DEBOUNCE_DELAY);
    return () => clearTimeout(debounceTimer);//clears the timer when any key press is done before  500 ms.
  }, [query]);

  async function getData() {
    console.log(ITEMS_API_URL + query);

    const res = await fetch(ITEMS_API_URL + query);
    const data = await res.json();
    setSearchResults(data);
    console.log(data);
  }
  return (
    <div className="wrapper">
      <div className="control">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        />
      </div>
      <div className="list is-hoverable">
        {searchResults.length > 0 &&
          searchResults
            .filter(item=>item.name.startsWith(query))
            .map((res, index) => <div key={res.name + index}>{res.name}</div>)}
      </div>
    </div>
  );
}
