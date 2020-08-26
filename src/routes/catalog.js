const express = require("express");
const router = express.Router();

// Require controller modules
const authorController = require("../controllers/author-controller");
const bookController = require("../controllers/book-controller");
const genreController = require("../controllers/genre-controller");
const bookInstanceController = require("../controllers/bookInstance-controller");

/// BOOK ROUTES ///

router.get("/books", bookController.booksList);
router.get("/book/:id", bookController.bookDetail);
router.post("/book/create", bookController.bookCreate);
router.patch("/book/:id/update", bookController.bookUpdate);
router.delete("/book/:id/delete", bookController.bookDelete);

/// AUTHOR ROUTES ///

router.get("/authors", authorController.authorList);
router.get("/author/:id", authorController.authorDetail);
router.post("/author/create", authorController.authorCreate);
router.patch("/author/:id/update", authorController.authorUpdate);
router.delete("/author/:id/delete", authorController.authorDelete);

/// GENRE ROUTES ///

router.get("/genres", genreController.genreList);
router.get("/genre/:id", genreController.genreDetail);
router.post("/genre/create", genreController.genreCreate);
// router.patch("/genre/:id/update", genreController.genreUpdate);
// router.delete("/genre/:id/delete", genreController.genreDelete);

// /// BOOKINSTANCE ROUTES ///

router.get("/bookinstances", bookInstanceController.bookInstanceList);
router.get("/bookinstance/:id", bookInstanceController.bookInstanceDetail);
router.post("/bookinstance/create", bookInstanceController.bookInstanceCreate);
// router.patch(
//   "/bookinstance/:id/update",
//   bookInstanceController.bookInstanceUpdate
// );
// router.delete(
//   "/bookinstance/:id/delete",
//   bookInstanceController.bookInstanceDelete
// );

module.exports = router;
