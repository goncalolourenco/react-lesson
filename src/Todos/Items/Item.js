import React from 'react';

const Item = ({ text, done }) => {
  return (
    <li>
      {text} - {done}
    </li>
  );
};

export default Item;
