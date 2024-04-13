import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  // State variable to store users
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ]);

  // State variables for form inputs
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Effect to log message when users state changes
  useEffect(() => {
    console.log('Users state changed:', users);
  }, [users]);

  // Function to handle form submission for adding a new user
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: users.length + 1, name, email };
    setUsers([...users, newUser]);
    setId('');
    setName('');
    setEmail('');
  };

  // Function to handle editing a user
  const handleEdit = (id, name, email) => {
    setId(id);
    setName(name);
    setEmail(email);
  };

  // Function to handle updating a user
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, name, email } : user
    );
    setUsers(updatedUsers);
    setId('');
    setName('');
    setEmail('');
  };

  // Function to handle deleting a user
  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Management</h1>
      {/* Form for adding a new user */}
      <form onSubmit={id ? handleUpdate : handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
      {/* Table to display users */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user.id, user.name, user.email)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
