import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
app.use(express.json());

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'your_database_name',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err) => {
    if (err) {
      res.status(500).send('Error retrieving users from database');
    } else {
      res.json();
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 1 
app.post('/saveData', (req, res) => {
   const { nickname, password } = req.body;
 
   // Validate or sanitize data if needed
 
   const query = 'INSERT INTO users (column1, column2) VALUES (?, ?)';
   connection.query(query, [nickname, password], (err) => {
     if (err) {
       console.error('Error saving data to the database:', err);
       res.status(500).send('Error saving data to the database');
     } else {
      console.log('Data saved successfully');
       res.status(200).send('Data saved successfully');
     }
   });
 });
 // 1