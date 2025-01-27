// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; // The port the server will run on

// Enable CORS for all origins
app.use(cors());

// Define a dummy list of users
const users = [
  { name: 'John Doe', email: 'john@gmail.com' },
  { name: 'Jane Doe', email: 'jane@gmail.com' },
  { name: 'Alice Johnson', email: 'alice@gmail.com' },
  { name: 'Bob Smith', email: 'bob@gmail.com' },
];

// Create a route to return the list of users
app.get('/register', (req, res) => {
  res.json(users); // Send the dummy users as a response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
