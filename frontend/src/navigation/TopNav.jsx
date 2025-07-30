import React, { useState } from 'react';
import './TopNav.css';
import Modal from './ProfileModal';

const Topnav = ({ username }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="topnav">
        <div className="logo">🌐 Minisite</div>
        <div className="profile" onClick={() => setModalOpen(true)}>
          PROFILE 👤
        </div>
      </nav>
      {modalOpen && <Modal username={username} onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default Topnav;
