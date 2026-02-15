require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// --- MOCK DATABASE (Temporary Storage in RAM) ---
// Since we don't have MongoDB installed, we store data here.
const users = []; 
const applications = [];

// --- API ROUTES ---

// 1. Home Route
app.get('/', (req, res) => {
    res.send('✅ NotWorking Backend API is Running!');
});

// 2. Register User (Mock)
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    
    // Check if user exists
    const userExists = users.find(u => u.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    
    console.log('User Registered:', newUser); // Show in terminal
    res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// 3. Login User (Mock)
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', token: 'fake-jwt-token-12345' });
});

// 4. Submit Application (Mock)
app.post('/api/apply', (req, res) => {
    const { fullName, jobRole, email } = req.body;
    
    const newApp = {
        id: applications.length + 1,
        fullName,
        jobRole,
        email,
        status: 'Pending',
        date: new Date()
    };
    
    applications.push(newApp);
    console.log('Application Received:', newApp); // Show in terminal
    res.status(201).json({ message: 'Application submitted successfully', application: newApp });
});

// 5. Get All Applications (Mock)
app.get('/api/applications', (req, res) => {
    res.json(applications);
});

// --- Start Server ---
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));