const db = require('../config/db');

// Book Model
const Book = {
  // Add a new book
  add: (bookData, callback) => {
    const sql = 'INSERT INTO Inventory (title, author, genre, publication_date, isbn) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [bookData.title, bookData.author, bookData.genre, bookData.publication_date, bookData.isbn], callback);
  },
  
  // Get books based on filters
  filter: (filters, callback) => {
    let sql = 'SELECT * FROM Inventory WHERE 1 = 1';
    const params = [];

    if (filters.title) {
      sql += ' AND title LIKE ?';
      params.push(`%${filters.title}%`);
    }
    if (filters.author) {
      sql += ' AND author LIKE ?';
      params.push(`%${filters.author}%`);
    }
    if (filters.genre) {
      sql += ' AND genre = ?';
      params.push(filters.genre);
    }
    if (filters.publication_date) {
      sql += ' AND publication_date = ?';
      params.push(filters.publication_date);
    }

    db.query(sql, params, callback);
  },

  // Export books
  getAll: (callback) => {
    const sql = 'SELECT * FROM Inventory';
    db.query(sql, callback);
  }
};

module.exports = Book;
