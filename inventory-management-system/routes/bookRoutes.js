const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

// Add a new book
router.post('/', bookController.addBook);

// Filter books
router.get('/', bookController.filterBooks);

// Export books
router.get('/export', bookController.exportBooks);

module.exports = router;
