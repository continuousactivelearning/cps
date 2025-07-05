import { useState } from 'react';

const sampleUsers = [
  { id: 1, username: 'john_doe', role: 'user', status: 'Active', lastLogin: '2024-06-01' },
  { id: 2, username: 'jane_admin', role: 'admin', status: 'Active', lastLogin: '2024-06-02' },
  { id: 3, username: 'alice', role: 'user', status: 'Inactive', lastLogin: '2024-05-28' },
  { id: 4, username: 'bob', role: 'user', status: 'Active', lastLogin: '2024-06-03' },
  { id: 5, username: 'charlie', role: 'user', status: 'Active', lastLogin: '2024-06-03' },
  { id: 6, username: 'diana', role: 'admin', status: 'Active', lastLogin: '2024-06-01' },
  { id: 7, username: 'eve', role: 'user', status: 'Inactive', lastLogin: '2024-05-30' },
  { id: 8, username: 'frank', role: 'user', status: 'Active', lastLogin: '2024-06-02' },
  { id: 9, username: 'grace', role: 'user', status: 'Active', lastLogin: '2024-06-03' },
  { id: 10, username: 'henry', role: 'user', status: 'Active', lastLogin: '2024-06-01' },
  { id: 11, username: 'irene', role: 'admin', status: 'Inactive', lastLogin: '2024-05-29' },
  { id: 12, username: 'jack', role: 'user', status: 'Active', lastLogin: '2024-06-02' },
];

const AdminUserManagement = () => {
  const [users, setUsers] = useState(sampleUsers);

  const handleEdit = (id: number) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User Management</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Username</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Role</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Status</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Last Login</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{user.username}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{user.role}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{user.status}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{user.lastLogin}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>
                <button onClick={() => handleEdit(user.id)} style={{ marginRight: '0.5rem' }}>Edit</button>
                <button onClick={() => handleDelete(user.id)} style={{ color: 'red' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserManagement; 
