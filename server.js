require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// --- 1. Database Connection ---
// This pulls the connection string from your .env file
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
    .then(() => console.log('✅ Real MongoDB Atlas Connected!'))
    .catch(err => console.log('❌ Database Connection Error:', err.message));

// --- 2. Database Schema (The Blueprint) ---
const ApplicationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    jobRole: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    date: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', ApplicationSchema);

// --- 3. API Routes ---

// Default Route
app.get('/', (req, res) => {
    res.send('🚀 NotWorking Backend API with Real DB is Running!');
});

// POST: Submit a Job Application
app.post('/api/apply', async (req, res) => {
    try {
        const { fullName, email, jobRole } = req.body;
        const newApp = new Application({ fullName, email, jobRole });
        await newApp.save();
        res.status(201).json({ message: 'Application saved to Cloud Database!', data: newApp });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: View All Applications
app.get('/api/applications', async (req, res) => {
    try {
        const apps = await Application.find().sort({ date: -1 });
        res.json(apps);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// --- 4. Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is live on port ${PORT}`);
});