import React from 'react';
import client from '../../client';
import './Users.css';

const Users = ({ onClick }) => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const newUsers = await client.getUsers();
      setUsers(newUsers);
      setIsLoading(false);
      console.log('newUsers', newUsers);
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className='user-list'>
      {users.map((user) => {
        return (
          <li className='user-item' key={user.id} onClick={() => onClick(user)}>
            {user.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
