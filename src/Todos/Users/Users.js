import React from 'react';
import './Users.css';

function UsersList(props) {
  const { users, isLoading, onClick } = props;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul className='user-list'>
      {users &&
        users.map((user) => {
          return (
            <li
              className='user-item'
              key={user.id}
              onClick={(event) => onClick(event, user)}
            >
              {user.name}
            </li>
          );
        })}
    </ul>
  );
}

export default UsersList;
