const sqlite3 = require('sqlite3').verbose();

// Initialize a new SQLite database
let db = new sqlite3.Database('./books.db');

// Create the Inventory table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Inventory (
        EntryID INTEGER PRIMARY KEY AUTOINCREMENT,
        Title TEXT NOT NULL,
        Author TEXT NOT NULL,
        Genre TEXT,
        PublicationDate DATE,
        ISBN TEXT UNIQUE
    )`);
    console.log("Database initialized and Inventory table created.");
});

db.close();
