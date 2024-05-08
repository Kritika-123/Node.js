const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'postgres',
password: 'root',
port: 5435,
});
app.use(express.json());
app.get('/users', (req, res) => {
pool.query('SELECT * FROM users', (error, result) => {
if (error) {
console.error('Error fetching todos', error);
res.status(500).json({ error: 'Internal server error' });
} else {
res.json(result.rows);
}
});
});
app.post('/users', (req, res) => {
const { username, email } = req.body;
pool.query('INSERT INTO users (username, email) VALUES ($1, $2)', [username, email], (error) => {
if (error) {
console.error('Error creating todo', error);
res.status(500).json({ error: 'Internal server error' });
} else {
res.status(201).json({ message: 'Todo created successfully' });
}

});
});
app.put('/users/:id', (req, res) => {
const { id } = req.params;
const { username, email } = req.body;
pool.query('UPDATE users SET username = $1, email = $2 WHERE id = $3', [username, email], (error) => {
if (error) {
console.error('Error updating todo', error);
res.status(500).json({ error: 'Internal server error' });
} else {
res.json({ message: 'Todo updated successfully' });
}
});
});
app.listen(port,()=>{console.log("open localhost:3000")} );

