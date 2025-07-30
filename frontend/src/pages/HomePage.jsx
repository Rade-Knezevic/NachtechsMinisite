import React, { useState } from 'react';

import './HomePage.css';
import Topnav from "../navigation/TopNav.jsx";

const HomePage = ({ username }) => {
  return (
    <div className="home-container">
      <Topnav username={username} />
      <div className="welcome-text">Welcome, {username}</div>
    </div>
  );
};

export default HomePage;
