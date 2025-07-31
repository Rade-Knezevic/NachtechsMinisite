import React, { useState } from 'react';
import './Sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSignOutAlt, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sidenav = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`sidenav ${expanded ? 'expanded' : ''}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="nav-item" onClick={() => navigate('/')}>
        <FontAwesomeIcon icon={faHome} />
        {expanded && <span>Home</span>}
      </div>
      <div className="nav-item" onClick={() => navigate('/settings')}>
        <FontAwesomeIcon icon={faCog} />
        {expanded && <span>Settings</span>}
      </div>
      <div className="nav-item" onClick={() => navigate('/account')}>
        <FontAwesomeIcon icon={faHouseUser} />
        {expanded && <span>Account</span>}
      </div>
      <div className="nav-item" onClick={() => navigate('/logout')}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        {expanded && <span>Logout</span>}
      </div>
    </div>
  );
};

export default Sidenav;
