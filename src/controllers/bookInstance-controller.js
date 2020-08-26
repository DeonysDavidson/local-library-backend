require("../config/dbconfig");
const author = require("../models/author");
const book = require("../models/book");
const genre = require("../models/genre");
const bookInstance = require("../models/bookinstance");

exports.bookInstanceList = (req, res) => {
  bookInstance
    .find()
    .populate("book")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(console.error);
};

exports.bookInstanceDetail = (req, res) => {
  bookInstance
    .findById(req.params.id)
    .populate("book")
    .then((data) => {
      res.status(200).json({
        bookInstanceDetail: data
      });
    })
    .catch(console.error);
};

exports.bookInstanceCreate = (req, res) => {
  const BookInstance = new bookInstance({
    book: req.body.book,
    imprint: req.body.imprint,
    status: req.body.status,
    dueBack: req.body.dueBack
  });
  BookInstance.save()
    .then((data) => {
      res.status(200).json({
        createdInstance: data
      });
    })
    .catch(console.error);
};

// exports.bookInstanceUpdate = (req, res) => {
//   const bookTemp = req.body;
//   bookInstance
//     .findByIdAndUpdate({ _id: req.params.id }, bookTemp)
//     .then(data => {
//       res.status(200).json({
//         UpdatedInstance: data
//       });
//     })
//     .catch(console.error);
// };

// exports.bookInstanceDelete = (req, res) => {
//   bookInstance
//     .findByIdAndDelete(req.params.id)
//     .then(data => {
//       res.status(200).json({
//         deletedBook: data
//       });
//     })
//     .catch(console.error);
// };
