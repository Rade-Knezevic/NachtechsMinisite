import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div>
      {loggedInUser ? (
        <HomePage username={loggedInUser} />
      ) : (
        <LoginPage onLoginSuccess={setLoggedInUser} />
      )}
    </div>
  );
};

export default App;
