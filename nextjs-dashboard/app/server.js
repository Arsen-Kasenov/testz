const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
   host: 'localhost',
   user: 'your_mysql_username',
   password: 'your_mysql_password',
   database: 'your_database_name',
});

db.connect((err) => {
   if (err) {
      console.error('Error connecting to MySQL:', err);
   } else {
      console.log('Connected to MySQL');
   }
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
// Sign-up
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, password], (err, result) => {
       if (err) {
          res.status(500).send('Error signing up');
       } else {
          res.status(200).send('Signed up successfully');
       }
    });
 });
 
 // Sign-in
 /* app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
       if (err) {
          res.status(500).send('Error signing in');
       } else {
          if (result.length > 0) {
             res.status(200).send('Signed in successfully');
          } else {
             res.status(401).send('Invalid credentials');
          }
       }
    });
 }); */
 
