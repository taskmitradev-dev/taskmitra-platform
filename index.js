require('dotenv').config(); // Loads your .env file
const express = require('express');
const app = express();

// Use the PORT from .env, or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('TaskMitra Server is Live! 🚀');
});

// A new route for your future tasks
app.get('/status', (req, res) => {
  res.json({ 
    project: "TaskMitra", 
    status: "Healthy",
    timestamp: new Date().toISOString() 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});