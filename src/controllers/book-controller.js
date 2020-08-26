require("../config/dbconfig");
const author = require("../models/author");
const book = require("../models/book");
const genre = require("../models/genre");
const bookInstance = require("../models/bookinstance");

exports.booksList = (req, res) => {
  book
    .find()
    .populate("author")
    .populate("genre")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(console.error);
};

exports.bookDetail = (req, res) => {
  book
    .findById(req.params.id)
    .populate("author")
    .populate("genre")
    .then(data => {
      bookInstance.find({ book: req.params.id }).then(instance => {
        res.status(200).json({
          bookDetail: data,
          instance
        });
      });
    })
    .catch(console.error);
};

exports.bookCreate = (req, res) => {
  const Book = new book({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    isbn: req.body.isbn,
    genre: req.body.genre
  });
  Book.save()
    .then(data => {
      res.status(200).json({
        createdBook: data
      });
    })
    .catch(console.error);
};

exports.bookUpdate = (req, res) => {
  const bookTemp = req.body;
  book
    .findByIdAndUpdate({ _id: req.params.id }, bookTemp)
    .then(data => {
      res.status(200).json({
        UpdatedBook: data
      });
    })
    .catch(console.error);
};

exports.bookDelete = (req, res) => {
  book
    .findByIdAndDelete(req.params.id)
    .then(data => {
      res.status(200).json({
        deletedBook: data
      });
    })
    .catch(console.error);
};
