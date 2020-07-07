import React from 'react';
import './Users.css';

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {}

  render() {
    const { users } = this.state;

    return (
      <ul className='user-list'>
        {users &&
          users.map((user) => {
            return (
              <li className='user-item' key={user.id}>
                {user.name}
              </li>
            );
          })}
      </ul>
    );
  }
}

export default UsersList;
