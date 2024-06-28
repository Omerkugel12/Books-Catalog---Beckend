const Book = require("../models/book.model");

async function getBooks(req, res) {
  try {
    const books = await Book.find(req.body);
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getBooks };
