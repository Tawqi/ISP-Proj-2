const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the 'client/dist' folder
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Catch-all route to serve index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(5000, "0.0.0.0", () => {
    console.log("✅ Server running on port 5000 and accessible globally");
  });
  