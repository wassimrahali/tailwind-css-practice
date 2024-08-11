import express from 'express';
import cors from 'cors';
import { Client, Account } from 'appwrite';

const app = express(); // Create an Express application

// Enable CORS
app.use(cors());

// Initialize Appwrite client
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('839153207253-bquhdfp83hag774vprjjat3');

// Initialize Appwrite Account service
const account = new Account(client);

// Define a simple route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Async function to handle login
async function handleLogin(req, res) {
    try {
        // Create the OAuth2 session using Appwrite's Account service
        const redirectUrl = await account.createOAuth2Session(
            'google', // The provider name, like 'google'
            'http://localhost:5173/', // The success redirect URL
            'http://localhost:5173/fail' // The failure redirect URL
        );
        res.redirect(redirectUrl);
    } catch (error) {
        console.error('Error during OAuth2 session creation:', error);
        res.redirect('/fail');
    }
}

// Connect the handleLogin function to a route
app.get('/login', handleLogin);

// Async function to handle logout
async function handleLogout(req, res) {
    try {
        // Logout by terminating the current session
        await account.deleteSession('current'); // Use 'current' to delete the current session
        res.redirect('/');
    } catch (error) {
        console.error('Error during logout:', error);
        res.redirect('/fail');
    }
}

// Connect the handleLogout function to a route
app.get('/logout', handleLogout);

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
