const Book = require("../models/book.model");

async function getBooks(req, res) {
  try {
    const books = await Book.find(req.body);
    res.status(200).json(books);
  } catch (error) {
    console.log("book.controller, getBooks. Error while getting book");
    res.status(500).json({ message: "Server error while getting book" });
  }
}

async function getBooksCount(req, res) {
  try {
    const count = await Book.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.log(
      "book.cotroller, getBooksCount. Error while getting book count"
    );
    res.status(500).json(error.message);
  }
}

async function getBooksById(req, res) {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    if (error.name === "CastError") {
      console.log(
        `book.controller, getBooksById. Error while getting book by id: ${id}`
      );
      return res.status(404).json({ message: "book not found" });
    }
    console.log(
      `robot.controller, getRobotById. Error while getting robot with id: ${id}`,
      err
    );
    res.status(500).json({ message: "Server error while getting book" });
  }
}

async function deleteBook(req, res) {
  const { id } = req.params;
  try {
    const bookDeleted = await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "book deleted" });
  } catch (error) {
    if (error.name === "CastError") {
      console.log(
        `book.controller, deleteBook. Error while getting book by id: ${id}`
      );
      return res.status(404).json({ message: "book not found" });
    } else {
      console.log(
        `robot.controller, deleteRobot. Error while deleting robot with id: ${id}`,
        err
      );
      res.status(500).json({ message: "Server error while deleting robot" });
    }
  }
}

async function createBook(req, res) {
  const newBook = req.body;
  const newBookToPost = new Book(newBook);
  try {
    const postedBook = await newBookToPost.save();
    res.status(201).json(postedBook);
  } catch (error) {
    if (error.name === "ValidationError") {
      console.log(`book.controller, createBook. ${error.message}`);
      res.status(400).json({ message: error.message });
    } else {
      console.log(`book.controller, createBook. ${error}`);
      res.status(500).json({ message: "Server error while creating robot" });
    }
  }
}
async function updateBook(req, res) {
  const { id } = req.params;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedBook);
  } catch (error) {
    if (error.name === "CastError") {
      console.log(
        `book.controller, getBooksById. Error while getting book by id: ${id}`
      );
      return res.status(404).json({ message: "book not found" });
    } else if (error.name === "Validלא ationError") {
      console.log(`book.controller, updateBook. ${error.message}`);
      res.status(400).json({ message: error.message });
    } else {
      console.log(`book.controller, updateBook. ${error}`);
      res.status(500).json({ message: "Server error while updating book" });
    }
  }
}

module.exports = {
  getBooks,
  getBooksCount,
  getBooksById,
  deleteBook,
  createBook,
  updateBook,
};
