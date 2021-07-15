import React from "react";
import UserCard from "./UserCard";

function UserList({ users, setSelectedUser }) {
  return (
    <div className="ui cards">
      {users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={() => setSelectedUser(user)}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
