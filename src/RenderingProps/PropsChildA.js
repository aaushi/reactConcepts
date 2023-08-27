import React from 'react'

const PropsChildA = ({ messageToChild }) => {
  return (
    <div>
      <h2>Hi I am ChildA.. Papa says: {messageToChild}</h2>
    </div>
  );
};

export default PropsChildA