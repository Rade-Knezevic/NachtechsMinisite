import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './AccountPage.css';
import './CommonStyles.css';
import {useNavigate} from "react-router-dom";

const AccountPage = () => {
    const navigate = useNavigate();


    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleRowDoubleClick = (accountId) => {
        navigate(`/account/${accountId}`);
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

    return (
        <div className="account-container">
            <div className="account-toolbar">
                <button className="new-account-btn">New Account</button>
            </div>

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
