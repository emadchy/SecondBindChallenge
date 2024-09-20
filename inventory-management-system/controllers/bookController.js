const Book = require('../models/bookModel');
const fs = require('fs');

// Add a new book
exports.addBook = (req, res) => {
  const bookData = req.body;
  Book.add(bookData, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error adding the book.' });
    } else {
      res.status(201).json({ message: 'Book added successfully.' });
    }
  });
};

// Filter books
exports.filterBooks = (req, res) => {
  const filters = req.query;
  Book.filter(filters, (err, books) => {
    if (err) {
      res.status(500).json({ error: 'Error filtering books.' });
    } else {
      res.json(books);
    }
  });
};

// Export books as CSV
exports.exportBooks = (req, res) => {
  Book.getAll((err, books) => {
    if (err) {
      res.status(500).json({ error: 'Error exporting books.' });
    } else {
      const csv = books.map(book => `${book.title},${book.author},${book.genre},${book.publication_date},${book.isbn}`).join('\n');
      fs.writeFileSync('books.csv', csv);
      res.download('books.csv');
    }
  });
};
