import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage'; // Don't forget to create this

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loggedInUser ? (
              <HomePage username={loggedInUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<LoginPage onLoginSuccess={setLoggedInUser} />}
        />
        <Route
          path="/account"
          element={
            loggedInUser ? (
              <AccountPage username={loggedInUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
