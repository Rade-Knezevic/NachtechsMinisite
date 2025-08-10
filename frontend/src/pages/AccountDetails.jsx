import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Topnav from "../components/TopNav.jsx";
import Sidenav from "../components/Sidenav.jsx";

const AccountDetail = ({ username }) => {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/account-users/${id}`)
            .then(response => {
                setAccount(response.data);
                validateAccount(response.data); // <- validate after fetching
            })
            .catch(error => {
                console.error('Error fetching account details:', error);
            });
    }, [id]);

    const validateAccount = (acc) => {
        const missingFields = [];
        if (!acc.account_name) missingFields.push('Account name');
        if (!acc.unique_identifier_code) missingFields.push('Code');
        if (!acc.authorization_level) missingFields.push('Authorization');
        if (acc.active === null || acc.active === undefined) missingFields.push('Active status');

        if (missingFields.length > 0) {
            setValidationError(`${missingFields.join(', ')} not set`);
        } else {
            setValidationError('');
        }
    };

    if (!account) return <p>Loading...</p>;

    return (
        <>
            <Topnav username={username} />
            <Sidenav />
            <div className="account-detail">
                <h2>Account Detail: {account.account_name || 'Unnamed Account'}</h2>

                {validationError && (
                    <p className="error" style={{ color: 'red', fontWeight: 'bold' }}>
                        ⚠️ {validationError}
                    </p>
                )}

                <p><strong>ID:</strong> {account.id}</p>
                <p><strong>Code:</strong> {account.unique_identifier_code || '—'}</p>
                <p><strong>Authorization:</strong> {account.authorization_level || '—'}</p>
                <p><strong>Active:</strong> {account.active ? 'Yes' : 'No'}</p>
                <p><strong>Description:</strong> {account.description || '—'}</p>
            </div>
        </>
    );
};

export default AccountDetail;
