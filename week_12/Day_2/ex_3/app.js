const express = require("express");
const app = express();
const books = require("./routes/books.js");

app.use(express.json());

app.use("/books", books);

app.listen(3000, () => {
  console.log("Server is running");
});
