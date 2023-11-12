const express = require("express");
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "Book One", author: "Author One", publishedYear: 2001 },
  { id: 2, title: "Book Two", author: "Author Two", publishedYear: 2002 },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).send("Book not found");
  }

  res.json(book);
});

app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
