import React from 'react';
import './ProfileModal.css';

const ProfileModal = ({ username, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Profile Info</h2>
        <label>First Name</label>
        <input type="text" placeholder="First Name" />
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" />
        <label>Username</label>
        <input type="text" defaultValue={username} />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;
