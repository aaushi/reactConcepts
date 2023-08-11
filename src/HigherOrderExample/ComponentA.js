import React ,{useState} from 'react';
import HOC from './HOC';

const ComponentA = (props) => {

  return (
    <div>
      <button onClick={props.handleIncrement}>
        I increment on click: {props.increment} {props.name}
      </button>
    </div>
  );
};

export default HOC(ComponentA,5)