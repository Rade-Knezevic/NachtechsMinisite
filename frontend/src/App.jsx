import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import AccountDetail from './pages/AccountDetails.jsx'; // Make sure this path is correct

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const RequireAuth = ({ children }) => {
    return loggedInUser ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage username={loggedInUser} />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={<LoginPage onLoginSuccess={setLoggedInUser} />}
        />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <AccountPage username={loggedInUser} />
            </RequireAuth>
          }
        />
        <Route
          path="/account/:id"
          element={
            <RequireAuth>
              <AccountDetail username={loggedInUser} />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
