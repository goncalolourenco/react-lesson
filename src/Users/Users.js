import React from 'react';

const Users = ({ onClick }) => {
  return (
    <ul>
      <li onClick={() => onClick(1)}>user 1</li>
      <li onClick={() => onClick(2)}>user 2</li>
      <li onClick={() => onClick(3)}>user 3</li>
    </ul>
  );
};

export default Users;
