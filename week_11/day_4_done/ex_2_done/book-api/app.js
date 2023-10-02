const express = require("express");
const app = express();

const books = [
  {
    id: "1",
    title: "Leaving Time",
    author: "Jodi Picoult",
    publishedYear: "2010",
  },
  {
    id: "2",
    title: "1st to Die",
    author: "James Patterson",
    publishedYear: "2015",
  },
  {
    id: "3",
    title: "Three",
    author: "Ted Dekker",
    publishedYear: "2000",
  },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const id = req.params.bookId;
  const book = books.find((book) => book.id === id);
  if (!book) {
    return res.status(404).send("Book not found");
  } else {
    return res.status(200).json(book);
  }
});

app.use(express.json());
app.post("/api/books/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };

  books.push(newBook);
  res.status(201).json(books);
});

app.listen(5000, () => {
  console.log("Server is running");
});
