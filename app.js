const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

// Route to add a new book to the inventory
app.post('/add-book', (req, res) => {
    const { title, author, genre, publicationDate, isbn } = req.body;
    const query = `INSERT INTO Inventory (Title, Author, Genre, PublicationDate, ISBN) 
                   VALUES (?, ?, ?, ?, ?)`;

    db.run(query, [title, author, genre, publicationDate, isbn], function(err) {
        if (err) {
            return res.status(400).send("Error adding book: " + err.message);
        }
        res.send("Book added successfully");
    });
});

// Route to filter/search books
app.get('/search-books', (req, res) => {
    const { title, author, genre } = req.query;
    let query = "SELECT * FROM Inventory WHERE 1=1";
    let params = [];

    if (title) {
        query += " AND Title LIKE ?";
        params.push('%' + title + '%');
    }
    if (author) {
        query += " AND Author LIKE ?";
        params.push('%' + author + '%');
    }
    if (genre) {
        query += " AND Genre LIKE ?";
        params.push('%' + genre + '%');
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            return res.status(400).send("Error searching books: " + err.message);
        }
        res.json(rows);
    });
});

// Route to export data in CSV or JSON format
app.get('/export-books', (req, res) => {
    const format = req.query.format || 'json';
    db.all("SELECT * FROM Inventory", [], (err, rows) => {
        if (err) {
            return res.status(400).send("Error exporting books: " + err.message);
        }

        if (format === 'csv') {
            const csv = rows.map(row => 
                `${row.EntryID},${row.Title},${row.Author},${row.Genre},${row.PublicationDate},${row.ISBN}`
            ).join('\n');
            res.header('Content-Type', 'text/csv');
            res.send(csv);
        } else {
            res.json(rows);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
