require("../config/dbconfig");
const author = require("../models/author");
const book = require("../models/book");

exports.authorList = (req, res) => {
  // console.log("hit 2");
  author
    .find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(console.error);
};

exports.authorDetail = (req, res) => {
  author
    .findById(req.params.id)
    .then(data => {
      book.find({ author: req.params.id }).then(bookdata => {
        res.status(200).json({
          authorDetails: data,
          bookDetails: bookdata
        });
      });
    })
    .catch(console.error);
};

exports.authorCreate = (req, res) => {
  const Author = new author({
    firstName: req.body.firstName,
    familyName: req.body.familyName,
    dateOfBirth: req.body.dateOfBirth,
    dateOfDeath: req.body.dateOfDeath
  });
  Author.save()
    .then(data => {
      res.status(200).json({
        CreatedAuthor: data
      });
    })
    .catch(console.error);
};

exports.authorDelete = (req, res) => {
  author
    .findByIdAndDelete(req.params.id)
    .then(data => {
      res.status(200).json({
        deletedAuthor: data
      });
    })
    .catch(console.error);
};

exports.authorUpdate = (req, res) => {
  const authorTemp = req.body;
  author
    .findByIdAndUpdate({ _id: req.params.id }, authorTemp)
    .then(data => {
      res.status(200).json({
        UpdatedAuthor: data
      });
    })
    .catch(console.error);
};
