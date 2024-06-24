const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  publishedDate: Date,
});

const BookModel = mongoose.model("book", bookSchema);

module.exports = BookModel;
