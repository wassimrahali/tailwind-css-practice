import { Account, Client } from 'appwrite';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66b8c2f0001b8d5c0d1d');
 
function LoginButton() {
    const [loading, setLoading] = useState(false);
    const account = new Account(client);
    const navigate = useNavigate(); // Hook for navigation

    async function handleLogin() {
        console.log('Login button clicked');
        setLoading(true);
        try {
            console.log('Starting OAuth2 session');
            const response = await account.createOAuth2Session(
                'google', // Provider ID should match the Appwrite configuration
                'http://localhost:5174/',
                'http://localhost:5174/fail'
            );
            console.log('OAuth2 session response:', response);
            console.log('OAuth2 session created successfully');

            // Redirect to the profile page upon successful login
            navigate('/profile');
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            console.log('Login process finished');
            setLoading(false);
        }
    }

    return (
        <div>
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Loading...' : 'Login with Google'}
            </button>
        </div>
    );
}

export default LoginButton