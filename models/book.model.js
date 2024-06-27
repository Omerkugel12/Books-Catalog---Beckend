const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    genres: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
