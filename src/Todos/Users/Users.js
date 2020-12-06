import React from "react";
import { useQuery } from "../../utils";
import "./Users.css";
import client from "../../client";

function UsersList({ onClick }) {
  const { data: users, isLoading } = useQuery(client.getUsers);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul className="user-list">
      {users &&
        users.map((user) => {
          return (
            <li
              className="user-item"
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
