require("../config/dbconfig");
const author = require("../models/author");
const book = require("../models/book");
const genre = require("../models/genre");

exports.genreList = (req, res) => {
  genre
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(console.error);
};

exports.genreDetail = async (req, res) => {
  try {
    const genreData = await genre.findById(req.params.id);
    const bookData = await book.find({ genre: req.params.id });
    res.status(200).json({
      genreData,
      bookData
    });
  } catch (e) {
    console.error(e);
  }
};

exports.genreCreate = async (req, res) => {
  try {
    const Genre = new genre({ name: req.body.name });
    const genreCheck = await genre.findOne(req.body);
    if (genreCheck) {
      res.status(400).send("Genre already present");
    } else {
      Genre.save().then((data) => {
        res.status(200).json({
          CreatedGenre: data
        });
      });
    }
  } catch (e) {
    console.error(e);
  }
};

// exports.genreDelete = (req, res) => {
//   genre
//     .findByIdAndDelete(req.params.id)
//     .then(data => {
//       res.status(200).json({
//         deletedGenre: data
//       });
//     })
//     .catch(console.error);
// };

// exports.genreUpdate = (req, res) => {
//   const genreTemp = req.body;
//   genre
//     .findByIdAndUpdate({ _id: req.params.id }, genreTemp)
//     .then(data => {
//       res.status(200).json({
//         UpdatedGenre: data
//       });
//     })
//     .catch(console.error);
// };
