import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './AccountPage.css';
import './CommonStyles.css';
import {useNavigate} from "react-router-dom";
import Topnav from "../components/TopNav.jsx";

const AccountPage = (username) => {
    const navigate = useNavigate();


    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showForm, setShowForm] = useState(false);
    const [newAccount, setNewAccount] = useState({
        account_name: '',
        unique_identifier_code: '',
        authorization_level: '',
        active: true,
        description: '',
    });

    const handleRowDoubleClick = (accountId) => {
        navigate(`/account/${accountId}`);
    };

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        setNewAccount(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleCreateAccount = () => {
        axios.post('http://localhost:8000/api/account-users', newAccount)
            .then(res => {
                setAccounts(prev => [...prev, res.data.data]);
                setShowForm(false);
                setNewAccount({
                    account_name: '',
                    unique_identifier_code: '',
                    authorization_level: '',
                    active: true,
                    description: '',
                });
                console.log("Created account:", res.data);
            })
            .catch(err => {
                console.error('Failed to create account:', err);
                alert('Error creating account');
            });
    };


    useEffect(() => {
        axios.get('http://localhost:8000/api/account-users')
            .then(res => {
                setAccounts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to load accounts');
                setLoading(false);
            });
    }, []);

    console.log(username);
    return (
        <div className="account-container">
            <Topnav username={username.username}/>
            <div className="account-toolbar">
                <button className="new-account-btn" onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancel' : 'New Account'}
                </button>
            </div>

            {showForm && (
                <div className="account-form">
                    <input name="account_name" placeholder="Account Name" value={newAccount.account_name}
                           onChange={handleInputChange}/>
                    <input name="unique_identifier_code" placeholder="Code" value={newAccount.unique_identifier_code}
                           onChange={handleInputChange}/>
                    <select
                        name="authorization_level"
                        value={newAccount.authorization_level}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Authorization Level</option>
                        <option value="Administrative">Administrative</option>
                        <option value="Multi-Account">Multi-Account</option>
                        <option value="Single Account">Single Account</option>
                    </select>

                    <label>
                        <input type="checkbox" name="active" checked={newAccount.active} onChange={handleInputChange}/>
                        Active
                    </label>
                    <input name="description" placeholder="Description" value={newAccount.description}
                           onChange={handleInputChange}/>
                    <button className="new-account-btn" onClick={handleCreateAccount}>Save</button>
                </div>
            )}

            {loading ? (
                <p>Loading accounts...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <table className="account-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Account Name</th>
                        <th>Code</th>
                        <th>Authorization</th>
                        <th>Active</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {accounts.map(account => (
                        <tr key={account.id} onDoubleClick={() => handleRowDoubleClick(account.id)}>
                            <td>{account.id}</td>
                            <td>{account.account_name}</td>
                            <td>{account.unique_identifier_code}</td>
                            <td>{account.authorization_level}</td>
                            <td>{account.active ? 'Yes' : 'No'}</td>
                            <td>{account.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AccountPage;
