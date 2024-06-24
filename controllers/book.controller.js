const BookModel = require("../models/book.model");

// Controller to get all books
const getBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};

// Controller to create a new book
const createBook = async (req, res) => {
  const { title, author, description, publishedDate } = req.body;
  try {
    const book = new BookModel({ title, author, description, publishedDate });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: "Error creating book", error });
  }
};

module.exports = { getBooks, createBook };
