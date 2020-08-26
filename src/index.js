const express = require("express");
const cors = require("cors");

const book = require("./models/book");
const author = require("./models/author");
const genre = require("./models/genre");
const bookInstance = require("./models/bookinstance");

const catalogRouter = require("./routes/catalog");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/catalog", catalogRouter);

app.get("/", async (req, res) => {
  try {
    const booksCount = await book.countDocuments();
    const bookInstanceCount = await bookInstance.countDocuments();
    const booksAvailible = await bookInstance.countDocuments({
      status: "Available"
    });
    const authorCount = await author.countDocuments();
    const genreCount = await genre.countDocuments();

    res.status(200).json([
      {
        name: "Books",
        count: booksCount
      },
      {
        name: "Book Copies",
        count: bookInstanceCount
      },
      {
        name: "Books Availible",
        count: booksAvailible
      },
      {
        name: "Authors",
        count: authorCount
      },
      {
        name: "Genres",
        count: genreCount
      }
    ]);
  } catch (e) {
    console.log(e);
  }
});

app.listen(8000, () => {
  console.log("Server Running");
});
