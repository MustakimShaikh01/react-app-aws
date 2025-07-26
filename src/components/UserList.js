import React from 'react';

function UserList({ users, editUser, deleteUser }) {
  return (
    <div>
      <h3>User List</h3>
      {users.length === 0 && <p>No users yet.</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email}) &nbsp;
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
