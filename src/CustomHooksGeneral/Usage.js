import React from 'react'
import useLocalStorage from './useLocalStorage'
import useFetch from './useFetch';

const Usage = () => {

    let [count, setCount] = useLocalStorage("count", 0);
    const { responseJSON, isLoading, error } = useFetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(responseJSON);
  return (
    <div>
      <h2>useLocalStorage</h2>
      <h4>Count - {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        {responseJSON && responseJSON.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    </div>
  );
}

export default Usage