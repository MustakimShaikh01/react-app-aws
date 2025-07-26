import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [editableUser, setEditableUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditableUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = (user) => {
    setEditableUser(user);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h2>React JSON CRUD</h2>
      <UserForm addUser={addUser} updateUser={updateUser} editableUser={editableUser} />
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
