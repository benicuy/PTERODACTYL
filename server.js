const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Simulasi status bot dan log
let botStatus = 'stopped';
let logs = 'Bot logs will appear here...\n';

// Endpoint untuk memulai bot
app.post('/api/start-bot', (req, res) => {
    if (botStatus === 'running') {
        return res.json({ success: false, message: 'Bot is already running.' });
    }

    // Ganti dengan logika untuk memulai bot
    botStatus = 'running';
    logs += 'Bot started.\n';
    res.json({ success: true });
});

// Endpoint untuk menghentikan bot
app.post('/api/stop-bot', (req, res) => {
    if (botStatus === 'stopped') {
        return res.json({ success: false, message: 'Bot is already stopped.' });
    }

    // Ganti dengan logika untuk menghentikan bot
    botStatus = 'stopped';
    logs += 'Bot stopped.\n';
    res.json({ success: true });
});

// Endpoint untuk mendapatkan log
app.get('/api/logs', (req, res) => {
    res.json({ logs });
});

// Mulai server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
