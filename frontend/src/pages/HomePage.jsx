import React, {useState} from 'react';

import './HomePage.css';
import './CommonStyles.css';
import Topnav from "../components/TopNav.jsx";
import Sidenav from "../components/Sidenav.jsx";

const HomePage = ({username}) => {
    return (
        <div className="home-container">
            <Topnav username={username}/>
            <Sidenav/>
            <div className="welcome-text">Welcome, {username}</div>
        </div>
    );
};

export default HomePage;
