import React from 'react';
import './Users.css';

class UsersList extends React.Component {
  render() {
    const { users, isLoading, onClick } = this.props;

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
}

export default UsersList;
