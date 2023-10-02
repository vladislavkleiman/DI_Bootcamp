const { fetchPosts } = require("./data/dataService.js");
const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("Server running");
});

app.get("/api/posts", async (req, res) => {
  const posts = await fetchPosts();
  res.json(posts);
});
