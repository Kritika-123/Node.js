// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for GET requests to '/api/users'
app.get('/api/users', (req, res) => {
  // Access query parameters from req.query object
  const { name, age } = req.query;

  // Send a response with the retrieved query parameters
  res.send(`Name: ${name}, Age: ${age}`);
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
