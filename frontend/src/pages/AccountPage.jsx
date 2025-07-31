import React from 'react';
import './AccountPage.css';

const testAccounts = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Lee', email: 'bob@example.com', role: 'Manager' },
];

const AccountPage = () => {
  const handleRowDoubleClick = (accountId) => {
    window.location.href = `/account/${accountId}`;
  };

  return (
    <div className="account-container">
      <div className="account-toolbar">
        <button className="new-account-btn">New Account</button>
      </div>
      <table className="account-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Role</th>
          </tr>
        </thead>
        <tbody>
          {testAccounts.map(account => (
            <tr key={account.id} onDoubleClick={() => handleRowDoubleClick(account.id)}>
              <td>{account.id}</td>
              <td>{account.name}</td>
              <td>{account.email}</td>
              <td>{account.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountPage;
