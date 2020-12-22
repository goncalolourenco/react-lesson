import React from 'react';
import './Users.css';

const Users = ({ onClick }) => {
  return (
    <ul className='user-list'>
      <li className='user-item' onClick={() => onClick(1)}>
        user 1
      </li>
      <li className='user-item' onClick={() => onClick(2)}>
        user 2
      </li>
      <li className='user-item' onClick={() => onClick(3)}>
        user 3
      </li>
    </ul>
  );
};

export default Users;
