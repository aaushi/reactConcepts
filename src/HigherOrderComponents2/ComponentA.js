import React from 'react';
import HOC from './HOC'

const ComponentA = ({ count, handleIncrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>IncrementCount</button>
      <h2>{count}</h2>
    </div>
  );
};

export default HOC(ComponentA)