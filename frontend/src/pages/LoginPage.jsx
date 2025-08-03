import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CommonStyles.css';

const LoginPage = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                username,
                password,
            });

            if (response.data.success) {
                onLoginSuccess(username);
                navigate('/'); // ✅ Redirect to homepage
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Connection error or server is down');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            /><br/>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            /><br/>
            <button className={"new-account-btn"} type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
