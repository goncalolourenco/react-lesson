import React from 'react';
import './Users.css';
import client from '../../client';

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      fetchState: {
        isLoading: false,
        error: null,
      },
    };
  }

  async componentDidMount() {
    try {
      this.setState({ fetchState: { isLoading: true, error: null } });
      const users = await client.getUsers();
      this.setState({ users, fetchState: { isLoading: false } });
    } catch (error) {
      this.setState({
        fetchState: { isLoading: false, error: 'The request has failed' },
      });
    }
  }

  render() {
    const {
      users,
      fetchState: { isLoading },
    } = this.state;

    const { onClick } = this.props;

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
