import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, editableUser }) {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editableUser) setUser(editableUser);
    else setUser({ name: '', email: '' });
  }, [editableUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return;
    editableUser ? updateUser(user) : addUser(user);
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      <button type="submit">{editableUser ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default UserForm;
