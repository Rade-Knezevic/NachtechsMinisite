import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Topnav from "../components/TopNav.jsx";

const AccountDetail = (username) => {
  const { id } = useParams();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/account-users/${id}`)
      .then(response => {
        setAccount(response.data);
      })
      .catch(error => {
        console.error('Error fetching account details:', error);
      });
  }, [id]);

  if (!account) return <p>Loading...</p>;

  return (
      <>
      <Topnav username={username.username}/>
    <div className="account-detail">
      <h2>Account Detail: {account.account_name}</h2>
      <p><strong>ID:</strong> {account.id}</p>
      <p><strong>Code:</strong> {account.unique_identifier_code}</p>
      <p><strong>Authorization:</strong> {account.authorization_level}</p>
      <p><strong>Active:</strong> {account.active ? 'Yes' : 'No'}</p>
      <p><strong>Description:</strong> {account.description}</p>
    </div>
          </>
  );
};

export default AccountDetail;
