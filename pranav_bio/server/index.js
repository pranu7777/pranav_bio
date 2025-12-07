const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React client built assets
// (For production usage later)
// app.use(express.static(path.join(__dirname, '../client/dist')));

// API Routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'Server is running', timestamp: new Date() });
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // In a real app, you would use Nodemailer here
    // For now, we'll just log it and return success
    console.log('Contact Form Submission:', { name, email, message });

    /* 
    // Nodemailer setup example:
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    */

    // Simulate delay
    setTimeout(() => {
        res.status(200).json({ message: 'Message received successfully!' });
    }, 1000);
});

// Fallback for React routing
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
