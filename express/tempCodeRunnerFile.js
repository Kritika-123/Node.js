const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  const { name, age } = req.query;
  res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});