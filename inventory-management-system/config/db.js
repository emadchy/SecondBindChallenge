const mysql = require('mysql');

// Create database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',  // Replace with your MySQL password
  database: 'book_inventory'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;
