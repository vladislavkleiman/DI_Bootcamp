const express = require("express");
const router = express.Router();

const books = [];

router.get("/", (req, res) => {
  res.send(books);
});

router.post("/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
  };

  books.push(newBook);
  res.status(200).send(books);
});

router.put("/id/:id", (req, res) => {
  const id = req.params.id;
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    const updateBooks = {
      id: books[bookIndex].id,
      title: req.body.title,
    };
    books[bookIndex] = updateBooks;
    res.status(200).json(books);
  }
});

router.delete("/id/:id", (req, res) => {
  const id = req.params.id;
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(200).json("Book deleted");
  }
});

module.exports = router;
