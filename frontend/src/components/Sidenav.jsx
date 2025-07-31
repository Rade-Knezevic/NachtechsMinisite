import React, { useState } from 'react';
import './Sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidenav = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`sidenav ${expanded ? 'expanded' : ''}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="nav-item">
        <FontAwesomeIcon icon={faHome} />
        {expanded && <span>Home</span>}
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faCog} />
        {expanded && <span>Settings</span>}
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faSignOutAlt} />
        {expanded && <span>Logout</span>}
      </div>
    </div>
  );
};

export default Sidenav;
